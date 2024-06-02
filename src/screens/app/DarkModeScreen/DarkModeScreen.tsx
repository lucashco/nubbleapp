import React, {useState} from 'react';

import {RadioButtonSelector, Screen} from '@components';

type ThemePreference = 'light' | 'dark' | 'system';

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
  const [selectedItem, setSelectedItem] = useState<Option>();

  return (
    <Screen canGoBack title="Modo escuro">
      <RadioButtonSelector
        items={items}
        selectedItem={selectedItem}
        onSelect={item => setSelectedItem(item)}
        labelKey="label"
        valueKey="themePreference"
        descriptionKey="description"
      />
    </Screen>
  );
}
