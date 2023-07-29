import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  return postApi.getList();
}

export const postService = {
  getList,
};
