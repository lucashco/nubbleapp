import {setupServer} from 'msw/node';

import {postCommentHandlers} from './postComment/postCommentHandlers';
import {userHandlers} from './User/userHandlers';

export const server = setupServer(...postCommentHandlers, ...userHandlers);

export {mockedData as mockedPostComment} from './postComment/mocks';
export {userMocked} from './User/userMocked';

export {resetInMemoryResponse} from './postComment/postCommentHandlers';
