import React, {PropsWithChildren, ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {RenderOptions, render} from '@testing-library/react-native';

import {theme} from '@theme';

export const AllTheProviders = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
};

const customRender = <T extends unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(component, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
