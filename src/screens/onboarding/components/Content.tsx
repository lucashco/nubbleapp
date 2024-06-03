import React from 'react';

import {Box, Text} from '@components';

import {OnboardingPageItem} from '../onboardingData';

type ContentProps = Omit<OnboardingPageItem, 'image'>;

export function Content({title, subtitle}: ContentProps) {
  return (
    <Box>
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
      <Text preset="paragraphLarge">{subtitle}</Text>
    </Box>
  );
}
