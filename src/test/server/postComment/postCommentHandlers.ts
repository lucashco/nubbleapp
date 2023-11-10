import {BASE_URL, PageAPI} from '@api';
import {PostCommentAPI, POST_COMMENT_BASE_URL} from '@domain';
import {http, HttpResponse} from 'msw';

import {mockedData} from './mocks';

const url = `${BASE_URL}${POST_COMMENT_BASE_URL}`;

let inMemoryReponse = {...mockedData.mockedPostCommentResponse};

export const postCommentHandlers = [
  http.get(url, async () => {
    const response: PageAPI<PostCommentAPI> = inMemoryReponse;

    return HttpResponse.json(response, {status: 200});
  }),

  http.post<any, {post_id: number; message: string}>(url, async ({request}) => {
    const body = await request.json();

    const newPostCommentAPI: PostCommentAPI = {
      ...mockedData.postCommentAPI,
      id: 999,
      post_id: body.post_id,
      message: body.message,
    };

    inMemoryReponse.data = [newPostCommentAPI, ...inMemoryReponse.data];
    inMemoryReponse.meta = {
      ...inMemoryReponse.meta,
      total: inMemoryReponse.meta.total + 1,
    };

    return HttpResponse.json(newPostCommentAPI, {status: 201});
  }),
];
