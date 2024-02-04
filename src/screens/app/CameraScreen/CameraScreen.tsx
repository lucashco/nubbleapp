import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Box, Icon, PermissionManager} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 20;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const [flash, setFlash] = useState(false);
  const {top} = useAppSafeArea();

  function toggleFlash() {
    setFlash(state => !state);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nublle acessar a camera">
      <Box flex={1}>
        <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFill} />
        <Box flex={1} justifyContent="space-between" style={{paddingTop: top}}>
          <Box
            backgroundColor="black60"
            height={CONTROL_HEIGHT - CONTROL_DIFF}
            paddingHorizontal="s24"
            flexDirection="row"
            justifyContent="space-between">
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
