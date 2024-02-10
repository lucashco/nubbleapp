import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

import {Box, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 20;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const [flash, setFlash] = useState(false);
  const {top} = useAppSafeArea();

  const device = useCameraDevice('back');

  const isFocused = useIsFocused();
  const {appState} = useAppState();
  const isActive = isFocused && appState === 'active';

  function toggleFlash() {
    setFlash(state => !state);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nublle acessar a camera">
      <Box flex={1}>
        {device !== undefined && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
          />
        )}

        <Box flex={1} justifyContent="space-between">
          <Box
            backgroundColor="black60"
            height={CONTROL_HEIGHT - CONTROL_DIFF}
            paddingHorizontal="s24"
            flexDirection="row"
            justifyContent="space-between"
            style={{paddingTop: top}}>
            <Icon
              size={20}
              color="grayWhite"
              name="arrowLeft"
              onPress={navigation.goBack}
            />
            <Icon
              size={20}
              color="grayWhite"
              name={flash ? 'flashOn' : 'flashOff'}
              onPress={toggleFlash}
            />
            <Box width={20} />
          </Box>
          <Box
            backgroundColor="black60"
            height={CONTROL_HEIGHT + CONTROL_DIFF}
            justifyContent="center"
            alignItems="center">
            <Icon name="cameraClick" color="grayWhite" />
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}
