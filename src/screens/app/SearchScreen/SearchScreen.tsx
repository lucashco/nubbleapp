import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';
import {useSearchHistoryService} from '@services';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {useDebounce} from '@hooks';

import {SearchHistory} from './components/SearchHistory';

export function SearchScreen() {
  const [search, setSearch] = useState('');
  const deboucendSearch = useDebounce(search);
  const {addUser} = useSearchHistoryService();

  const {list} = useUserSearch(deboucendSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        onPress={() => addUser(item)}
        user={item}
        avatarProps={{size: 48}}
      />
    );
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          LeftComponent={<Icon name={'search'} color="gray3" />}
          value={search}
          onChangeText={setSearch}
          boxProps={{
            flex: 1,
            flexShrink: 1,
            marginLeft: 's10',
          }}
        />
      }>
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </Screen>
  );
}
