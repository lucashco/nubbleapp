import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PublishPostScreen({}: AppScreenProps<'PublishPostScreen'>) {
  return (
    <Screen>
      <Text>Olá publish screen</Text>
    </Screen>
  );
}
