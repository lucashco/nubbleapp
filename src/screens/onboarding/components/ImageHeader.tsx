import React from 'react';
import {Dimensions, Image} from 'react-native';

import {useAppColorScheme} from '@services';

import {OnboardingPageItem} from '../onboardingData';

const SCREEN_WIDTH = Dimensions.get('screen').width;

type ImageHeaderProps = {
  image: OnboardingPageItem['image'];
};

export function ImageHeader({image}: ImageHeaderProps) {
  const appColorScheme = useAppColorScheme();
  const source = appColorScheme === 'light' ? image.light : image.dark;

  return (
    <Image source={source} style={{width: SCREEN_WIDTH, height: '100%'}} />
  );
}
