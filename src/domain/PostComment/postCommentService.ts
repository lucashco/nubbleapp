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
  const response = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return {
    meta: apiAdapter.toMetaDataPage(response.meta),
    data: response.data.map(postCommentAdapter.toPostComment),
  };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const response = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(response);
}

export const postCommentService = {
  getList,
  create,
};
