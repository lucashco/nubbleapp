import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getById(id: number): Promise<User> {
  const response = await userApi.getById(id.toString());

  return userAdapter.toUser(response);
}

export const userService = {
  getById,
};
