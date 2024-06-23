import {useAuthCredentials, useShowOnboarding} from '@services';

export type Stacks = 'Loading' | 'Auth' | 'App' | 'Onboarding';

export function useRouter(): Stacks {
  const {authCredentials, isLoading} = useAuthCredentials();
  const showOnboarding = useShowOnboarding();
  console.log({isLoading});
  if (isLoading) {
    return 'Loading';
  }

  if (showOnboarding) {
    return 'Onboarding';
  }

  if (authCredentials) {
    return 'App';
  }

  return 'Auth';
}
