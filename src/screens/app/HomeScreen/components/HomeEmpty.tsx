import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({loading, error, refetch}: Props) {
  let component = null;

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" marginBottom="s16">
          Não foi possível carregar o feed 😢
        </Text>
        <Button title="Recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  component = (
    <Box>
      <Text bold preset="paragraphMedium">
        Não há publicações no seu feed
      </Text>
    </Box>
  );

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
