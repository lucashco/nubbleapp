import {
  request as rnpReques,
  check as rnpCheck,
  PermissionStatus as RnpPermissionStatus,
  PERMISSIONS as RNPPERMISSIONS,
  Permission as RnpPermission,
} from 'react-native-permissions';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

const mapName: Record<PermissionName, RnpPermission> = {
  photoLibrary: RNPPERMISSIONS.IOS.PHOTO_LIBRARY,
  camera: RNPPERMISSIONS.IOS.CAMERA,
};

const mapStatus: Record<RnpPermissionStatus, PermissionStatus> = {
  blocked: 'never_ask_again',
  denied: 'denied',
  granted: 'granted',
  limited: 'granted',
  unavailable: 'unavailable',
};

async function request(name: PermissionName): Promise<PermissionStatus> {
  const status = await rnpReques(mapName[name]);

  return mapStatus[status];
}

async function check(name: PermissionName): Promise<PermissionStatus> {
  const status = await rnpCheck(mapName[name]);

  return mapStatus[status];
}

export const permissionService: PermissionService = {
  request,
  check,
};
