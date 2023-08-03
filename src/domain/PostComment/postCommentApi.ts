import {PageAPI, PageParams, api} from '@api';

import {PostCommentApi} from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentApi>> {
  const response = await api.get<PageAPI<PostCommentApi>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });

  return response.data;
}

async function create(
  post_id: number,
  message: string,
): Promise<PostCommentApi> {
  const response = await api.post<PostCommentApi>('user/post_comment', {
    post_id,
    message,
  });

  return response.data;
}

export const postCommentApi = {
  getList,
  create,
};
