import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;

async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentsPageApi = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModel(
    postCommentsPageApi,
    postCommentAdapter.toPostComment,
  );
}

async function create(postId: number, message: string): Promise<PostComment> {
  const response = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(response);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);

  return response.message;
}
/**
 * @description The user can delete the comment if he is the author of the post or the author of the comment.
 * @param userId the user id of current session
 * @param postComment the comment to be deleted
 * @param postAuthorId the id of the author of the post
 */

function isAllowToDelete(
  postComment: PostComment,
  userId: number | null,
  postAuthorId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
