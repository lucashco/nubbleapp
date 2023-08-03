import {dateUtils} from '@utils';

import {PostComment, PostCommentApi} from './postCommentTypes';

function toPostComment(postCommentApi: PostCommentApi): PostComment {
  return {
    id: postCommentApi.id,
    message: postCommentApi.message,
    createdAt: postCommentApi.created_at,
    createdAtRelative: dateUtils.formatRelative(postCommentApi.created_at),
    author: {
      id: postCommentApi.user.id,
      name: postCommentApi.user.full_name,
      profileURL: postCommentApi.user.profile_url,
      userName: postCommentApi.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
