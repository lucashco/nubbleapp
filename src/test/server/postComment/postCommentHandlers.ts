import {BASE_URL, PageAPI} from '@api';
import {PostCommentAPI} from '@domain';
import {http, HttpResponse} from 'msw';
import {POST_COMMENT_BASE_URL} from 'src/domain/PostComment/postCommentApi';

import {mockedData} from './mocks';

const url = `${BASE_URL}${POST_COMMENT_BASE_URL}`;

export const postCommentHandlers = [
  http.get(url, async () => {
    const response: PageAPI<PostCommentAPI> =
      mockedData.mockedPostCommentResponse;

    return HttpResponse.json(response, {status: 200});
  }),
];
