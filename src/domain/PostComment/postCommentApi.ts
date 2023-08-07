import {PageAPI, PageParams, api} from '@api';

import {PostCommentApi} from './postCommentTypes';

const POST_COMMENT_BASE_URL = 'user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentApi>> {
  const response = await api.get<PageAPI<PostCommentApi>>(
    POST_COMMENT_BASE_URL,
    {
      params: {
        post_id,
        ...pageParams,
      },
    },
  );

  return response.data;
}

async function create(
  post_id: number,
  message: string,
): Promise<PostCommentApi> {
  const response = await api.post<PostCommentApi>(POST_COMMENT_BASE_URL, {
    post_id,
    message,
  });

  return response.data;
}

async function remove(postCommentId: number): Promise<{message: string}> {
  const response = await api.delete<{message: string}>(
    `${POST_COMMENT_BASE_URL}/${postCommentId}`,
  );

  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove,
};
