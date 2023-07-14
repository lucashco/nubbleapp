import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Icon, Text, Button} from '@components';

import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({navigation, route}: ScreenProps) {
  function backToBeginning() {
    //TODO: Navegar para tela de login.
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={backToBeginning} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
