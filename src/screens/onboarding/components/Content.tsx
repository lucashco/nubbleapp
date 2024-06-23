import React from 'react';

import {Box, ProgressIndicator, Text} from '@components';

import {OnboardingPageItem} from '../onboardingData';

type ContentProps = Omit<OnboardingPageItem, 'image'>;

export function Content({title, subtitle, index, total}: ContentProps) {
  return (
    <Box>
      <ProgressIndicator total={total} currentIndex={index} mb="s24" />
      <Text preset="headingLarge">
        {title.map(({text, hightlight}) => (
          <Text
            key={text}
            bold
            preset="headingLarge"
            color={hightlight ? 'carrotSecondary' : 'backgroundContrast'}>
            {text}
          </Text>
        ))}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {subtitle}
      </Text>
    </Box>
  );
}
