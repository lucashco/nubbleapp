import React from 'react';
import {Image, Dimensions} from 'react-native';

interface PostImageProps {
  imageURL: string;
}

export function PostImage({imageURL}: PostImageProps) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      width={Dimensions.get('screen').width}
      height={300}
    />
  );
}
