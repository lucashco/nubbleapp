import {MMKV} from 'react-native-mmkv';

import {StorageService} from '../storage';

const mmkvInstance = new MMKV();

export const MMKVStorage: StorageService = {
  getItem: async key => {
    const item = mmkvInstance.getString(key);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  },
  setItem: async (key, value) => {
    mmkvInstance.set(key, JSON.stringify(value));
  },
  removeItem: async key => {
    mmkvInstance.delete(key);
  },
};
