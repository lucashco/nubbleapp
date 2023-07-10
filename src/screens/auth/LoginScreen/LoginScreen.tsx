import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button';
import {TextInput} from '../../../components/TextInput';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {RootStackParamList} from '../../../routes/routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen isScrollable>
      <Text preset="headingLarge" mb="s8" bold>
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40" bold>
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput label="Senha" placeholder="Digite sua senha" />
      <Text color="primary" mt="s10" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button preset="primary" title="Entrar" mt="s48" />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
        mt="s12"
      />
    </Screen>
  );
}
