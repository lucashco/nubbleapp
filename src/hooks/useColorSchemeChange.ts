import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {
  settingsService,
  useAppColorScheme,
  useSettingsService,
} from '@services';

/**
 * To listen to device color scheme changes
 */
export function useColorSchemeChange() {
  const appColorScheme = useAppColorScheme();
  const {onSystemChange} = useSettingsService();

  useEffect(() => {
    onSystemChange(Appearance.getColorScheme());
  }, [onSystemChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      onSystemChange(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, [onSystemChange]);

  useEffect(() => {
    settingsService.handleStatusBar(appColorScheme);
  }, [appColorScheme]);

  return {appColorScheme};
}
