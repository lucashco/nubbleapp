import {postListMock} from './postListMock';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  let header = {
    Authorization:
      'Bearer Mg.owY1lBBSvZ8hfe_nE7_eFQHPEmsbYFJhX1lnaK9IiKwAQI_bcSOlYcQTjWtp',
  };

  const response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: header,
  });

  const data = await response.json();
  console.log(data);
  return postListMock;
}

export const postApi = {
  getList,
};
