import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Screen, Text} from '@components';
import {AppStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettingsScreen({}: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text>SETTINGS SCREEN</Text>
      <Button title="Home" />
    </Screen>
  );
}
