import React, {ImageBackground, ImageStyle, StyleProp} from 'react-native';

import {images} from '@assets';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

interface Props {
  imageUri: string;
  imageWidth: number;
}

export function Header({imageUri, imageWidth}: Props) {
  const navigation = useNavigation();

  function navigateToPublishPostScreen() {
    if (imageUri) {
      navigation.navigate('PublishPostScreen', {imageUri});
    }
  }

  return (
    <Box>
      <ImageBackground
        source={imageUri ? {uri: imageUri} : images.imagePlaceholder}
        style={[
          {width: imageWidth, height: imageWidth},
          $imageBackgroundStyle,
        ]}>
        {imageUri && (
          <Button
            onPress={navigateToPublishPostScreen}
            preset="ghost"
            title="Escolher essa"
            mb="s24"
          />
        )}
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingTop: 's24',
  paddingBottom: 's16',
};

const $imageBackgroundStyle: StyleProp<ImageStyle> = {
  justifyContent: 'flex-end',
  alignItems: 'center',
};
