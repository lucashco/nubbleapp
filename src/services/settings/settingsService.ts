import {Appearance, ColorSchemeName} from 'react-native';

import {AppColorScheme, ThemePreference} from './settingsTypes';

function onThemePreferenceChange(
  themePreference: ThemePreference,
): AppColorScheme {
  if (themePreference === 'system') {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme ? colorScheme : 'light';
  }

  return themePreference;
}

function onSystemChange(
  color: ColorSchemeName,
  themePreference: ThemePreference,
): AppColorScheme | null {
  if (themePreference === 'system') {
    return color ? color : 'light';
  }
  return null;
}

export const settingsService = {
  onThemePreferenceChange,
  onSystemChange,
};
