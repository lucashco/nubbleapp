import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">Teste de fonte</Text>
      <Text preset="headingMedium">Teste de fonte</Text>
    </SafeAreaView>
  );
}

export default App;
