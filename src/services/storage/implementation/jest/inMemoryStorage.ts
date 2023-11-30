import {StorageService} from '../../storage';

const storage: Record<string, any> = {};

export const inMemoryStorage: StorageService = {
  getItem: jest.fn(key => {
    if (key in storage) {
      return storage[key];
    } else {
      return null;
    }
  }),
  removeItem: jest.fn(async key => {
    if (key in storage) {
      delete storage[key];
    }
  }),
  setItem: jest.fn(async (key, value) => {
    storage[key] = value;
  }),
};
