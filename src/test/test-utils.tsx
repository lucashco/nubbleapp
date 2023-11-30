import React, {PropsWithChildren, ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthCredentialsProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';

import {Toast} from '@components';
import {theme} from '@theme';

const queryClientConfig: QueryClientConfig = {
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
      cacheTime: Infinity,
    },
  },
};

export const wrapAllProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);

  return ({children}: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = <T extends unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(component, {wrapper: wrapAllProviders(), ...options});

export const wrapScreenProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);

  return ({children}: {children: React.ReactNode}) => (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>{children}</NavigationContainer>
          <Toast />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
};

function customRenderScreen<T extends unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: wrapScreenProviders(), ...options});
}

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
  return renderHook(renderCallback, {
    wrapper: wrapAllProviders(),
    ...options,
  });
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {
  customRender as render,
  customRenderHook as renderHook,
  customRenderScreen as renderScreen,
};
