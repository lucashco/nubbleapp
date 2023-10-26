import React from 'react';

import {Post} from '@domain';
import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 3,
  favoriteCount: 2,
  reactionCount: 2,
  text: 'this is a text (post description)',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'fake-profile-url',
    userName: 'mariajulia',
  },
};

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
