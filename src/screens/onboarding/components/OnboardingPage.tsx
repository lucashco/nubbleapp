import React from 'react';
import {Dimensions} from 'react-native';

import {Box} from '../../../components/Box/Box';
import {OnboardingPageItem} from '../onboardingData';

import {BottomMenu} from './BottomMenu';
import {Content} from './Content';
import {ImageHeader} from './ImageHeader';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export type OnboardingPageProps = {
  page: OnboardingPageItem;
  onNextPagePress: () => void;
  onSkipPress: () => void;
};

export function OnboardingPage({
  page,
  onNextPagePress,
  onSkipPress,
}: OnboardingPageProps) {
  return (
    <Box flex={1} backgroundColor="background" width={SCREEN_WIDTH}>
      <Box flex={4}>
        <ImageHeader image={page.image} />
      </Box>
      <Box flex={5} paddingHorizontal="s24">
        <Content {...page} />
      </Box>
      <Box flex={1} paddingHorizontal="s24">
        <BottomMenu
          onNextPagePress={onNextPagePress}
          onSkipPress={onSkipPress}
          isLastPage={page.isLastPage}
        />
      </Box>
    </Box>
  );
}
