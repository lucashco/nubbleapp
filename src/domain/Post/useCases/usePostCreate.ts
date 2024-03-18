import {MutationOptions, QueryKeys} from '@infra';
import {ImageForUpload, multimediaService} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostCreate(options?: MutationOptions<Post>) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    Post,
    unknown,
    {text: string; postImage: ImageForUpload}
  >({
    mutationFn: ({text, postImage}) => postService.createPost(text, postImage),

    onSuccess: post => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.PostList]});
      if (options?.onSuccess) {
        options.onSuccess(post);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao criar post.');
      }
    },
  });

  function createPost({
    description,
    imageUri,
  }: {
    description: string;
    imageUri: string;
  }) {
    const imageForUpload = multimediaService.prepareImageForUpload(imageUri);

    mutate({text: description, postImage: imageForUpload});
  }

  return {
    isLoading,
    isError,
    createPost,
  };
}
