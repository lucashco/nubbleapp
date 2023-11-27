import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory, useSearchHistoryService} from '@services';

import {Box, Icon, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const userList = useSearchHistory();
  const {removeUser} = useSearchHistoryService();

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        avatarProps={{size: 48}}
        user={item}
        RightComponent={
          <Icon
            name="trash"
            onPress={() => removeUser(item.id)}
            color="gray5"
          />
        }
      />
    );
  }

  return (
    <Box>
      <Text marginBottom="s16">Buscas recentes</Text>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text preset="headingMedium">Busca recentes</Text>}
      />
    </Box>
  );
}
