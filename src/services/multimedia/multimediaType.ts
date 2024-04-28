export type PhotoListPaginated = {
  photoList: string[];
  cursor?: string;
  hasNextPage: boolean;
};
export interface ImageForUpload {
  uri: string;
  name: string;
  type: 'image/jpeg' | 'image/png';
}
