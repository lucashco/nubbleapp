import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {useToast, useToastService} from '@services';

import {ToastContent} from './components/ToastContent';

const TOAST_DEFAUTL_DURATION = 2000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnimation],
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();

      setTimeout(
        () => () => {
          runExitingAnimation(hideToast);
        },
        toast.duration || TOAST_DEFAUTL_DURATION,
      );
    }
  }, [hideToast, runEnteringAnimation, runExitingAnimation, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeAnimation,
      }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
