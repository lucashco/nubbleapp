import {ImageForUpload, MediaService} from './multimediaType';

function prepareImageForUpload(imageUri: string): ImageForUpload {
  // todo
  console.log(imageUri);
  return {
    uri: 'path',
    name: 'name',
    type: 'image/jpeg',
  };
}

export const multimediaService: MediaService = {prepareImageForUpload};
