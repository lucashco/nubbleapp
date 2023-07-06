import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';

import {Box} from '../Box';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  isScrollable?: boolean;
}

export function Screen({
  canGoBack = false,
  isScrollable = false,
  children,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = isScrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
          {canGoBack && (
            <Box mb="s24" flexDirection="row" alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" bold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
