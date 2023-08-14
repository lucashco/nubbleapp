import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast, useToastService} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const TOAST_MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  useEffect(() => {
    setTimeout(
      () => () => {
        hideToast();
      },
      toast?.duration,
    );
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Box {...$boxStyle}>
      <Icon color="success" name="checkRound" size={32} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        Toast
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  maxWidth: TOAST_MAX_WIDTH,
  style: {...$shadowProps},
};
