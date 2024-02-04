import {Permission, PermissionsAndroid, Platform} from 'react-native';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

async function request(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapPermissionName(name);

  if (permission) {
    const result = await PermissionsAndroid.request(permission);
    return result;
  }

  return 'unavailable';
}

async function check(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapPermissionName(name);
  if (permission) {
    const result = await PermissionsAndroid.check(permission);

    if (result) {
      return 'granted';
    }

    return 'denied';
  }

  return 'unavailable';
}

function mapPermissionName(name: PermissionName): Permission | null {
  if (name === 'photoLibrary') {
    if (Number(Platform.Version) >= 33) {
      return 'android.permission.READ_MEDIA_IMAGES';
    } else {
      return 'android.permission.READ_EXTERNAL_STORAGE';
    }
  }
  if (name === 'camera') {
    return 'android.permission.CAMERA';
  }
  return null;
}

export const permissionService: PermissionService = {
  request,
  check,
};
