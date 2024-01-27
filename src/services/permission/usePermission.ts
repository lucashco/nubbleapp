import {useCallback, useEffect, useState} from 'react';

import {permissionService} from './permissionService';
import {PermissionName, PermissionStatus} from './permissionTypes';

export function usePermission(name: PermissionName) {
  const [loading, setLoading] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>();

  const checkPermission = useCallback(async () => {
    try {
      setLoading(true);
      const initialStatus = await permissionService.check(name);

      if (initialStatus === 'denied') {
        const newStatus = await permissionService.request(name);

        setPermissionStatus(newStatus);
      } else {
        setPermissionStatus(initialStatus);
      }
    } catch (error) {
      setPermissionStatus('unavailable');
    } finally {
      setLoading(false);
    }
  }, [name]);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return {
    status: permissionStatus,
    isLoading: loading,
  };
}
