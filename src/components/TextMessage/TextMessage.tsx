import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
        />
      </Box>

      <Pressable
        onPress={() => onPressSend(value || '')}
        disabled={sendIsDisabled}>
        <Text
          preset="paragraphMedium"
          color={sendIsDisabled ? 'gray2' : 'primary'}>
          Enviar
        </Text>
      </Pressable>
    </Pressable>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,

  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
