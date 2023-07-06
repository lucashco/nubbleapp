import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput';
import {Icon} from '../Icon';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

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
