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

export const postService = {
  getList,
};
