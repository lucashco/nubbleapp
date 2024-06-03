import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

type BottonMenuProps = Pick<
  OnboardingPageProps,
  'onNextPagePress' | 'onSkipPress'
> & {
  isLastPage: boolean;
};

export function BottomMenu({
  onNextPagePress,
  onSkipPress,
  isLastPage,
}: BottonMenuProps) {
  return (
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <PressableBox onPress={onSkipPress} hitSlop={10}>
        <Text semiBold color="gray2">
          Pular
        </Text>
      </PressableBox>
      <PressableBox
        onPress={onNextPagePress}
        hitSlop={10}
        flexDirection="row"
        alignItems="center"
        gap="s4">
        <Text bold>{isLastPage ? 'Começar' : 'Próximo'}</Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}
