import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Separator} from '@components';
import {AppScreenProps} from '@routes';

import {MenuItem, MenuItemProps} from './components/MenuItem';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, singOut} = useAuthSignOut();

  const items: MenuItemProps[] = [
    {
      label: 'Termos de uso',
      onPress: () => {},
    },
    {
      label: 'Política de privacidade',
      onPress: () => {},
    },
    {
      label: 'Modo escuro',
      onPress: () => navigation.navigate('DarkModeScreen'),
    },
  ];

  function renderItem({item}: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />;
  }

  return (
    <Screen canGoBack title="Configurações" flex={1}>
      <FlatList
        bounces={false}
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.label}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button
            mt="s48"
            loading={isLoading}
            onPress={singOut}
            title="Sair da conta"
          />
        }
      />
    </Screen>
  );
}
