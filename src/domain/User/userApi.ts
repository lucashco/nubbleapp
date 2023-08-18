import {PageAPI, PageParams, api} from '@api';

import {UserAPI} from './userTypes';

async function getList(params?: PageParams): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>('user/post', {
    params,
  });

  return response.data;
}

export const userApi = {
  getList,
};
