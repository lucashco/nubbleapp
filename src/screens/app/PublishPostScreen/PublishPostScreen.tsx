import React, {useState} from 'react';
import {Dimensions, Image, ImageStyle, StyleProp} from 'react-native';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2; // 50% of the screen width

export function PublishPostScreen({
  route,
}: AppScreenProps<'PublishPostScreen'>) {
  const [description, setDescription] = useState('');

  const {imageUri} = route.params;
  return (
    <Screen scrollable canGoBack title="Novo post">
      <Image source={{uri: imageUri}} style={$imageStyle} />
      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui"
        containerProps={{
          borderWidth: 0,
        }}
      />
      <Button mt="s56" title="Publicar post" preset="primary" />
    </Screen>
  );
}

const $imageStyle: StyleProp<ImageStyle> = {
  width: IMAGE_WIDTH,
  height: IMAGE_WIDTH,
  alignSelf: 'center',
  marginTop: 20,
};
