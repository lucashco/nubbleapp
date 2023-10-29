import {Post} from '@domain';

export const mockedPost: Post = {
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
