import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';
import {renderHook} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

jest.mock('react-native-safe-area-context');

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  it('should returns the minimum spacement required', () => {
    mockedUseSafeAreaInsets.mockImplementation(
      () => ({top: 5, bottom: 5} as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  it('should returns the safe area spacement', () => {
    mockedUseSafeAreaInsets.mockImplementation(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toBeGreaterThan(theme.spacing.s20);
    expect(result.current.bottom).toBeGreaterThan(theme.spacing.s20);
  });
});
