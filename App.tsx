import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text';
import {Button} from './src/components/Button';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">Teste de fonte</Text>
        <Text preset="headingMedium">Teste de fonte</Text>
        <Button title="Entrar" backgroundColor="carrotSecondary" mt="s20" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
