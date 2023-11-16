import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {mockedPostComment, server, resetInMemoryReponse} from '@test';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
  resetInMemoryReponse();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

describe('integration: PostCommentScreen', () => {
  it('should update the list of comments when the user add a comment', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          key: 'PostCommentScreen',
          name: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();

    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    fireEvent.changeText(inputText, 'novo comentário');

    const button = screen.getByText(/enviar/i);

    fireEvent.press(button);

    const newComment = await screen.findByText(/novo comentário/i);

    expect(newComment).toBeTruthy();

    const comments = screen.getAllByTestId(/post-comment-id/i);

    expect(comments).toHaveLength(3);
  });

  it('should update the list of comments and show toast when user deletes a comment', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];

    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });

    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          key: 'PostCommentScreen',
          name: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    // esperar a lista carrgar
    // Identificar o commntario que sera deletado
    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );

    expect(comment).toBeTruthy();

    // disparar o long press no comentario
    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();

    // pressionar em confirmar no alert
    mockedConfirm && mockedConfirm();

    await waitForElementToBeRemoved(() =>
      screen.getByText(mockedPostComment.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );

    // Atualizar a lista
    const comments = screen.getAllByTestId(/post-comment-id/i);

    expect(comments).toHaveLength(1);

    // verificar se o toast aparece
    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy(),
    );

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
