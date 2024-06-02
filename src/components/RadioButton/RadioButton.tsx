import React from 'react';

import {Box, PressableBox} from '../Box/Box';

export type RadioButtonProps = {
  isSelected: boolean;
  onPress: () => void;
};

export function RadioButton({isSelected, onPress}: RadioButtonProps) {
  return (
    <PressableBox
      onPress={onPress}
      hitSlop={10}
      height={20}
      width={20}
      borderWidth={isSelected ? 2 : 1}
      borderColor={isSelected ? 'primary' : 'onBackgroundGray2'}
      borderRadius="s12"
      alignItems="center"
      justifyContent="center">
      <Box
        backgroundColor={isSelected ? 'primary' : undefined}
        borderRadius="s8"
        height={12}
        width={12}
      />
    </PressableBox>
  );
}
