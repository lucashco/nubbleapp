import React from 'react';

import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button';
import {TextInput} from '../../../components/TextInput';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen() {
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
      <Button preset="outline" title="Criar uma conta" mt="s12" />
    </Screen>
  );
}
