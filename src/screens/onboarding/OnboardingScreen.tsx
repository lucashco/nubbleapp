import React, {useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useSettingsService} from '@services';

import {Box} from '@components';
import {OnboardingScreenProps} from '@routes';

import {OnboardingPage} from './components/OnboardingPage';
import {OnboardingPageItem, onboardingPages} from './onboardingData';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const [pageIndex, setPageIndex] = useState(0);
  const ref = useRef<FlatList<OnboardingPageItem>>(null);
  const {finishOnboarding} = useSettingsService();

  function onNextPagePress() {
    const isLastPage = pageIndex === onboardingPages.length - 1;

    if (isLastPage) {
      finishOnboarding();
    } else {
      ref.current?.scrollToIndex({index: pageIndex + 1, animated: true});
      setPageIndex(page => page + 1);
    }
  }

  // function onOnboardingFinish() {
  //   console.log('Trocar a stack');
  // }

  function renderItem({item}: ListRenderItemInfo<OnboardingPageItem>) {
    return (
      <OnboardingPage
        page={item}
        onNextPagePress={onNextPagePress}
        onSkipPress={finishOnboarding}
      />
    );
  }

  return (
    <Box flex={1} backgroundColor="background">
      <FlatList
        ref={ref}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={onboardingPages}
        renderItem={renderItem}
      />
    </Box>
  );
}
