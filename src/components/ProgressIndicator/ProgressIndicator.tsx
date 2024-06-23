import React from 'react';

import {Box, BoxProps} from '../Box/Box';

type ProgressIndicatorProps = {
  total: number;
  currentIndex: number;
} & BoxProps;

export function ProgressIndicator({
  total,
  currentIndex,
  ...boxProps
}: ProgressIndicatorProps) {
  return (
    <Box flexDirection="row" alignItems="center" {...boxProps}>
      {Array.from({length: total}).map((_, index) => (
        <Box
          key={index}
          width={index === currentIndex ? 14 : 8}
          height={index === currentIndex ? 14 : 8}
          bg={index === currentIndex ? 'primary' : 'gray3'}
          borderRadius="s16"
          mr="s12"
        />
      ))}
    </Box>
  );
}
