import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {ImageForUpload, PhotoListPaginated} from './multimediaType';

const NUM_PHOTOS_PER_PAGE = 12;

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({
    first: NUM_PHOTOS_PER_PAGE,
    after: cursor,
  });

  const photoList = photoPage.edges.map(edge => edge.node.image.uri);

  return {
    photoList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page,
  };
}

function prepareImageForUpload(imageUri: string): ImageForUpload {
  // todo
  console.log(imageUri);
  return {
    uri: 'path',
    name: 'name',
    type: 'image/jpeg',
  };
}

export const multimediaService = {
  prepareImageForUpload,
  getPhotos,
};
