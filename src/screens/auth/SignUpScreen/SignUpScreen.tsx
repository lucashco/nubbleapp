import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {RootStackParamList} from '../../../routes/routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

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

      <Controller
        control={control}
        name="username"
        render={({field, fieldState}) => (
          <TextInput
            label="Seu username"
            placeholder="@"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        render={({field, fieldState}) => (
          <TextInput
            label="Nome completo"
            placeholder="Digite seu nome"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({field, fieldState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field, fieldState}) => (
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{mb: 's48'}}
          />
        )}
      />

      <Button
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
