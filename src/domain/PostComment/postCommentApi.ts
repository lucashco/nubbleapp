import {PageAPI, PageParams, api} from '@api';

// import {postListMock} from './postListMock';
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

export const postCommentApi = {
  getList,
};
