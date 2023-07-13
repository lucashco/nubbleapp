import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button';
import {FormTextInput} from '../../../components/Form/FormTextInput';

import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './ForgotPasswordSchema';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: ForgotPasswordSchema) {
    // TODO: submit form
    console.log(data);
    reset({
      title: `Enviamos as instruções para seu  ${'\n'}e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" bold mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphMedium" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        keyboardType="email-address"
        placeholder="Digite seu e-mail"
      />

      <Button
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
        mt="s48"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
