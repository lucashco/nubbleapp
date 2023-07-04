import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import React from 'react';
import {useTheme} from '@shopify/restyle';
import {Theme, ThemeColors} from '../../theme/theme';

export interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({
  color,
  ...rnActivityIndicatorProps
}: ActivityIndicatorProps) {
  const {colors} = useTheme<Theme>();

  return (
    <RNActivityIndicator color={colors[color]} {...rnActivityIndicatorProps} />
  );
}
