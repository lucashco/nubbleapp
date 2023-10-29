import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not show the comment link if there is no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/i);

    expect(commentLinkElement).toBeFalsy();
  });

  it('should navigate to the PostCommentScreen when the link is pressed', () => {
    render(<PostBottom {...mockedPost} commentCount={2} />);

    const commentLinkElement = screen.getByText(/comentário/i);

    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toBeCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
