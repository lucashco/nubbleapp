import React from 'react';
import {ThemeProvider} from '@shopify/restyle';

import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}

export default App;
