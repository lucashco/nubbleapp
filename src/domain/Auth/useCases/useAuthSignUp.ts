import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';
import {SignUpData} from '../authTypes';

export function useAuthSignUp(options: MutationOptions<void>) {
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: authService.singUp,
    retry: false,
    onError: error => {
      if (options.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: () => {
      if (options.onSuccess) {
        options.onSuccess();
      }
    },
  });

  function signUp(signUpData: SignUpData) {
    mutation.mutate(signUpData);
  }

  return {
    isLoading: mutation.isLoading,
    signUp,
  };
}
