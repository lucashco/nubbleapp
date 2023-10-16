import {AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

interface InterceptorProps {
  authCredentials: AuthCredentials | null;
  removeCredentials: () => Promise<void>;
  saveCredentials: (authCredentials: AuthCredentials) => Promise<void>;
}

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async error => {
      const status = error.response?.status;
      const failedRequest = error.config;

      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        !authService.isRefreshTokenRequest(failedRequest);

      if (status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(error);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials.refreshToken,
        );

        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }

      return Promise.reject(error);
    },
  );

  return () => api.interceptors.response.eject(interceptor);
}
