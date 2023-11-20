import React, {useState} from 'react';

import {Icon, Screen, Text, TextInput} from '@components';

export function SearchScreen() {
  const [search, setSearch] = useState('');
  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          boxProps={{
            flex: 1,
            flexShrink: 1,
            marginLeft: 's10',
          }}
          LeftComponent={<Icon name={'search'} color="gray3" />}
          value={search}
          onChangeText={setSearch}
        />
      }>
      <Text>Search Screen</Text>
    </Screen>
  );
}
