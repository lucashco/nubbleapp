import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Screen, Text} from '@components';
import {AppStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

export function HomeScreen({navigation}: ScreenProps) {
  return (
    <Screen>
      <Text>HOME SCREEN</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
