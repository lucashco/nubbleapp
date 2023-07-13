import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput, TextInputProps} from '../TextInput';

export function FormTextInput<FormType extends FieldValues>({
  name,
  control,
  rules,
  ...rest
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
}
