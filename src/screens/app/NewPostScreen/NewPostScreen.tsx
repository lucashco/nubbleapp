import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLS;

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  const [selectedImage, setSelectedImage] = useState('');
  const {photoList, fetchNextPage} = useCameraRoll({
    hasPermission: true,
    onFirstLoad: onSelectImage,
  });

  const flatListRef = useRef<FlatList>(null);

  function onSelectImage(image: string) {
    setSelectedImage(image);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectImage(item)}>
        <Image
          key={item}
          source={{uri: item}}
          style={{width: ITEM_WIDTH, height: 200}}
        />
      </Pressable>
    );
  }

  return (
    <Screen canGoBack title="Novo post" noHorizontalPadding>
      <FlatList
        numColumns={4}
        data={photoList}
        keyExtractor={item => item}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          <Header imageUri={selectedImage} imageWidth={SCREEN_WIDTH} />
        }
      />
    </Screen>
  );
}
