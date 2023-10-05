export interface StorageService {
  getItem: <T>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: StorageService;

export function initializeStorage(storageImpl: StorageService) {
  storage = storageImpl;
}
