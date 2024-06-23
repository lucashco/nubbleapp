import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {useColorSchemeChange} from '@hooks';

import {Router} from './src/routes/routes';
import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {initializeStorage, MMKVStorage} from './src/services/storage';
import {theme, darkTheme} from './src/theme/theme';

initializeStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): JSX.Element {
  const {appColorScheme} = useColorSchemeChange();

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColorScheme === 'dark' ? darkTheme : theme}>
            {/* Only use ToastProvider if it is using Context implementation.
          Zustand implementation doesn't need a provider */}
            {/* <ToastProvider> */}
            <Router />
            <Toast />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
