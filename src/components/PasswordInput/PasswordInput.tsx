import React, {useState} from 'react';
import {Icon, TextInput, TextInputProps} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureText, setIsSecureText] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureText(prevState => !prevState);
  }

  return (
    <TextInput
      secureTextEntry={isSecureText}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureText ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}
