import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button';
import {TextInput} from '../../../components/TextInput';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {RootStackParamList} from '../../../routes/routes';

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: LoginFormType) {
    console.log(data);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen isScrollable>
      <Text preset="headingLarge" mb="s8" bold>
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40" bold>
        Digite seu e-mail e senha para entrar
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Senha obrigatória',
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
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
        rules={{
          required: 'E-mail obrigatório',
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        mt="s10"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        preset="primary"
        title="Entrar"
        mt="s48"
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
        mt="s12"
      />
    </Screen>
  );
}
