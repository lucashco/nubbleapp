import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Params<T extends {length: number}> {
  value: T;
  enabled: boolean;
  queryKey: string;
  isAvailableFn: (value: T) => Promise<boolean>;
}

function useAuthIsValueIsAvailable<T extends {length: number}>({
  value,
  enabled,
  queryKey,
  isAvailableFn,
}: Params<T>) {
  const debouncedValue = useDebounce(value, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailableFn(debouncedValue),
    retry: false,
    staleTime: 1000 * 20, // 20 seconds
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebouncing = debouncedValue !== value;

  return {
    // isAvailable: !!data,
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}

export function useAuthIsUsernameAvailable({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) {
  return useAuthIsValueIsAvailable({
    value: username,
    enabled,
    queryKey: QueryKeys.IsUsernameAvailable,
    isAvailableFn: () => authService.isUserNameAvailable(username),
  });
}

export function useAuthIsEmailAvailable({
  email,
  enabled,
}: {
  email: string;
  enabled: boolean;
}) {
  return useAuthIsValueIsAvailable({
    value: email,
    enabled,
    queryKey: QueryKeys.IsEmailAvailable,
    isAvailableFn: () => authService.isEmailAvailable(email),
  });
}
