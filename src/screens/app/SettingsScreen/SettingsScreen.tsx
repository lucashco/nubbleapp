import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, singOut} = useAuthSignOut();
  return (
    <Screen canGoBack title="Configurações">
      <Text>SETTINGS SCREEN</Text>
      <Button loading={isLoading} onPress={singOut} title="Sair da conta" />
    </Screen>
  );
}
