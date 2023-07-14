import React from 'react';

import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  Text,
  ActivityIndicator,
} from '@components';
import {ButtonPreset, buttonPresets} from './presets';

interface ButtonProps extends TouchableOpacityBoxProps {
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
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator size="large" color={buttonPreset.content} />
      ) : (
        <Text bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
