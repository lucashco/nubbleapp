import React from 'react';

import {server} from '@test';
import {renderScreen, screen} from 'test-utils';

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
  });
});
