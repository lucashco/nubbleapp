import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, TouchableOpacityBox, Text, ScreenProps} from '@components';

type Props = Pick<ScreenProps, 'canGoBack' | 'title'>;

const ICON_SIZE = 20;

export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();
  return (
    <Box
      mb="s24"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}

      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
