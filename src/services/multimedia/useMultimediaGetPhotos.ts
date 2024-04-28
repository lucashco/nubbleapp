import {useCallback, useEffect, useState} from 'react';

import {QueryKeys} from '@infra';
import {useInfiniteQuery} from '@tanstack/react-query';

import {multimediaService} from './multimediaService';

type Props = {
  hasPermission?: boolean;
  onFirstLoad?: (imageUri: string) => void;
};

export function useMultimediaGetPhotos({
  hasPermission = false,
  onFirstLoad,
}: Props) {
  const [photoList, setPhotoList] = useState<string[]>([]);

  const query = useInfiniteQuery({
    queryKey: [QueryKeys.CameraRollPhotos],
    queryFn: ({pageParam}) => multimediaService.getPhotos(pageParam),
    getNextPageParam: ({cursor}) => cursor,
    enabled: hasPermission,
  });

  function fetchNextPage() {
    if (hasPermission) {
      query.fetchNextPage();
    }
  }

  const onInitialLoading = useCallback(
    (imageUri: string) => {
      if (typeof onFirstLoad === 'function') {
        onFirstLoad(imageUri);
      }
    },
    [onFirstLoad],
  );

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<string[]>((prev, curr) => {
        return [...prev, ...curr.photoList];
      }, []);
      setPhotoList(newList);

      if (query.data.pages.length === 1) {
        onInitialLoading(newList[0]);
      }
    }
  }, [onInitialLoading, query.data]);

  return {
    photoList,
    hasNextPage: query.hasNextPage,
    fetchNextPage: fetchNextPage,
  };
}
