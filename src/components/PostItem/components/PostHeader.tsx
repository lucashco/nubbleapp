import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export function PostHeader({author}: PostHeaderProps) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <Image source={{uri: author.profileURL}} style={$imageStyle} />
      <Text preset="paragraphMedium" semiBold ml="s12">
        {author.userName}
      </Text>
    </Box>
  );
}

const $imageStyle: StyleProp<ImageStyle> = {
  width: 32,
  height: 32,
  borderRadius: 14,
};
