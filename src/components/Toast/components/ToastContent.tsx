import React from 'react';
import {Dimensions, StyleProp, TextStyle} from 'react-native';

import {Toast, ToastPosition, ToastType} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const TOAST_MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({toast}: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast.type || 'success';

  return (
    <Box {...$boxStyle} style={[$toastPosition[position], $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} size={32} />
      <Text style={$textStyle} ml="s16" preset="paragraphMedium" bold>
        Toast
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'redError',
    name: 'errorRound',
  },
};

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  maxWidth: TOAST_MAX_WIDTH,
};

const $toastPosition = {
  top: {top: 100},
  bottom: {bottom: 100},
};

const $textStyle: StyleProp<TextStyle> = {
  flexShrink: 1,
};
