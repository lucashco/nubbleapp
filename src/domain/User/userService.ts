import {apiAdapter} from '@api';
import {Page} from '@types';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getList(page: number): Promise<Page<User>> {
  const response = await userApi.getList({page, per_page: 10});

  return {
    meta: apiAdapter.toMetaDataPage(response.meta),
    data: response.data.map(userAdapter.toUser),
  };
}

export const userService = {
  getList,
};
