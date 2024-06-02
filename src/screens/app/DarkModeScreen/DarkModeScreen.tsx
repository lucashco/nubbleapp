import React from 'react';

import {
  ThemePreference,
  useAppThemePreference,
  useSettingsService,
} from '@services';

import {RadioButtonSelector, Screen} from '@components';

type Option = {
  label: string;
  description?: string;
  themePreference: ThemePreference;
};

// An array of objects with label properties
const items: Option[] = [
  {
    label: 'Ativado',
    themePreference: 'dark',
  },
  {
    label: 'Desativado',
    themePreference: 'light',
  },
  {
    label: 'Padrão do sistema',
    themePreference: 'system',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
  },
];

export function DarkModeScreen() {
  const themePreference = useAppThemePreference();
  const {setThemePreference} = useSettingsService();

  const selectedItem = items.find(
    item => item.themePreference === themePreference,
  );

  function setSelectedItem(item: Option) {
    setThemePreference(item.themePreference);
  }

  return (
    <Screen canGoBack title="Modo escuro">
      <RadioButtonSelector
        items={items}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
        labelKey="label"
        valueKey="themePreference"
        descriptionKey="description"
      />
    </Screen>
  );
}
