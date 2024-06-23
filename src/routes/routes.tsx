import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ActivityIndicator, Box} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {OnboardingStack} from './OnboardingStack';
import {Stacks, useRouter} from './useRouter';

function LoadingScreen() {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      justifyContent="center"
      alignItems="center">
      <ActivityIndicator size="large" color="primary" />
    </Box>
  );
}

const stacks: Record<Stacks, React.ReactElement> = {
  App: <AppStack />,
  Auth: <AuthStack />,
  Loading: <LoadingScreen />,
  Onboarding: <OnboardingStack />,
};

export function Router() {
  const stack = useRouter();
  const Stack = stacks[stack];

  return <NavigationContainer>{Stack}</NavigationContainer>;
}
