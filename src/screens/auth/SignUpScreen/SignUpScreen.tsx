import React from 'react';
import {useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';

import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

import {RootStackParamList} from '../../../routes/routes';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: SignUpFormType) {
    console.log(data);

    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer logion na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }
  return (
    <Screen canGoBack isScrollable>
      <Text preset="headingLarge" mb="s32" bold>
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        rules={{required: 'Username obrigatório'}}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome"
        autoCapitalize="words"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
