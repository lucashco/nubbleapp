import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './ForgotPasswordSchema';

const resetParams: AuthStackParamList['SuccessScreen'] = {
  title: `Enviamos as instruções para seu  ${'\n'}e-mail`,
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'primary',
  },
};

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {showToast} = useToastService();

  const {isLoading, requestNewPassword} = useAuthRequestNewPassword({
    onSuccess: () => {
      reset(resetParams);
    },
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm({email}: ForgotPasswordSchema) {
    requestNewPassword(email);
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
        loading={isLoading}
      />
    </Screen>
  );
}
