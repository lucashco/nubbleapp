import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({
  color,
  ...rnActivityIndicatorProps
}: ActivityIndicatorProps) {
  const {colors} = useAppTheme();

  return (
    <RNActivityIndicator color={colors[color]} {...rnActivityIndicatorProps} />
  );
}
