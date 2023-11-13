import React from 'react';

import {server} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

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

    expect(comments).toHaveLength(2);
  });
});
