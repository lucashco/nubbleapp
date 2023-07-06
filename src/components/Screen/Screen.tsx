import React from 'react';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';

import {Box} from '../Box';

interface ScreenProps {
  children: React.ReactNode;
}

export function Screen({children}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box
      paddingHorizontal="s24"
      style={{
        paddingTop: top,
      }}>
      {children}
    </Box>
  );
}
