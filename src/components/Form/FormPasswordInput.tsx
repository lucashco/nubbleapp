import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {
  PasswordInput,
  PasswordInputProps,
} from '../PasswordInput/PasswordInput';

export function FormPasswordInput<FormType extends FieldValues>({
  name,
  control,
  ...rest
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChange={field.onChange}
          errorMessage={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
}
