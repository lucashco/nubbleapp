import {BASE_URL, PageAPI} from '@api';
import {USER_PATH, UserAPI} from '@domain';
import {http, HttpResponse} from 'msw';

import {userMocked} from './userMocked';

const url = `${BASE_URL}${USER_PATH}`;
export const userHandlers = [
  http.get(url, async () => {
    const response: PageAPI<UserAPI> = userMocked.mockedUserResponse;

    return HttpResponse.json(response, {status: 200});
  }),

  http.get<{userId: string}>(`${url}/:userId`, async ({params}) => {
    const userApi = userMocked.userList.find(
      user => user.id.toString() === params.userId,
    );

    return HttpResponse.json(userApi, {status: 200});
  }),
];
