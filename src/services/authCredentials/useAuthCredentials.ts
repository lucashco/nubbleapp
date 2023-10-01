import {useContext} from 'react';

import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {AuthCredentialsService} from './authCredentialsType';
import {AuthCredentialsContext} from './Providers/AuthCredentialsProvider';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsContext();
}

const useAuthCredentialsContext = () => {
  const context = useContext(AuthCredentialsContext);

  if (!context) {
    throw new Error(
      'AuthCredentials must be used with AuthCredentialsProvider',
    );
  }

  return context;
};

/**
 * @deprecated this hook is deprecated and will be removed in a future release
 */

export const useAuthCredentialsZustand = create<AuthCredentialsService>()(
  persist(
    set => ({
      authCredentials: null,
      isLoading: false,
      saveCredentials: async ac => set({authCredentials: ac}),
      removeCredentials: async () => set({authCredentials: null}),
    }),
    {
      name: '@Auth',
      storage: storage,
    },
  ),
);
