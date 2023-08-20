import {PostComment, postCommentService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList<PostComment>([QueryKeys.PostCommentList], getList);
}
