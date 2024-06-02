import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {settingsService} from './settingsService';
import {SettingsStore} from './settingsTypes';

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      appColorScheme: 'light',
      themePreference: 'system',
      onSystemChange(color) {
        const updatedAppTheme = settingsService.onSystemChange(
          color,
          get().themePreference,
        );
        if (updatedAppTheme) {
          set({appColorScheme: updatedAppTheme});
        }
      },
      setThemePreference(newThemePreference) {
        const updatedAppTheme =
          settingsService.onThemePreferenceChange(newThemePreference);
        if (updatedAppTheme) {
          set({
            appColorScheme: updatedAppTheme,
            themePreference: newThemePreference,
          });
        }
      },
    }),
    {
      name: '@Settings',
      storage: storage,
    },
  ),
);

export function useAppColorScheme(): SettingsStore['appColorScheme'] {
  const appTheme = useSettingsStore(store => store.appColorScheme);
  return appTheme;
}

export function useAppThemePreference(): SettingsStore['themePreference'] {
  const themePreference = useSettingsStore(store => store.themePreference);
  return themePreference;
}

export function useSettingsService(): Pick<
  SettingsStore,
  'onSystemChange' | 'setThemePreference'
> {
  const onSystemChange = useSettingsStore(store => store.onSystemChange);
  const setThemePreference = useSettingsStore(
    store => store.setThemePreference,
  );
  return {
    onSystemChange,
    setThemePreference,
  };
}
