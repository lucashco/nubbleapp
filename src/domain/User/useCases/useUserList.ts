import {User, userService} from '@domain';
import {usePaginatedList} from '@infra';

export function useUserList() {
  return usePaginatedList<User>(userService.getList);
}
