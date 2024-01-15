import React from 'react';

import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  Text,
  ActivityIndicator,
} from '@components';

import {ButtonPreset, buttonPresets} from './presets';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled = false,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const isDisabled = disabled ? 'disabled' : 'default';
  const buttonPreset = buttonPresets[preset][isDisabled];

  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator
          testID="activity-indicator"
          size="large"
          color={buttonPreset.content.color}
        />
      ) : (
        <Text
          bold
          color={buttonPreset.content.color}
          {...buttonPreset.content.textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
