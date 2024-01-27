import {useEffect, useState} from 'react';

import {QueryKeys} from '@infra';
import {useInfiniteQuery} from '@tanstack/react-query';

import {cameraRollService} from './cameraRollService';

type Props = {
  hasPermission?: boolean;
  onFirstLoad?: (imageUri: string) => void;
};

export function useCameraRoll({hasPermission = false, onFirstLoad}: Props) {
  const [photoList, setPhotoList] = useState<string[]>([]);

  const query = useInfiniteQuery({
    queryKey: [QueryKeys.CameraRollPhotos],
    queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
    getNextPageParam: ({cursor}) => cursor,
    enabled: hasPermission,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<string[]>((prev, curr) => {
        return [...prev, ...curr.photoList];
      }, []);
      setPhotoList(newList);

      if (query.data.pages.length === 1 && onFirstLoad) {
        onFirstLoad(newList[0]);
      }
    }
  }, [query.data, onFirstLoad]);

  return {
    photoList,
    hasNextPage: query.hasNextPage,
    fetchNextPage: () => query.fetchNextPage(),
  };
}
