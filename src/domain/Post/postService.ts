import {postApi} from './postApi';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  return postApi.getList();
}

export const postService = {
  getList,
};
