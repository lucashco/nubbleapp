import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const response = await postApi.getList({page, per_page: 10});

  return {
    meta: apiAdapter.toMetaDataPage(response.meta),
    data: response.data.map(postAdapter.toPost),
  };
}

export const postService = {
  getList,
};
