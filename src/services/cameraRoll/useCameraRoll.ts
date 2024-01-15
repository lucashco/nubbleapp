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

// async function hasAndroidPermission() {
//   if (Platform.OS === 'ios') {
//     return true;
//   }

//   const getCheckPermissionPromise = () => {
//     if (Number(Platform.Version) >= 33) {
//       return Promise.all([
//         PermissionsAndroid.check(
//           PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//         ),
//         PermissionsAndroid.check(
//           PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
//         ),
//       ]).then(
//         ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
//           hasReadMediaImagesPermission && hasReadMediaVideoPermission,
//       );
//     } else {
//       return PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       );
//     }
//   };

//   const hasPermission = await getCheckPermissionPromise();
//   if (hasPermission) {
//     return true;
//   }
//   const getRequestPermissionPromise = () => {
//     if (Number(Platform.Version) >= 33) {
//       return PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//         PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
//       ]).then(
//         statuses =>
//           statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
//             PermissionsAndroid.RESULTS.GRANTED,
//       );
//     } else {
//       return PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
//     }
//   };

//   return await getRequestPermissionPromise();
// }
