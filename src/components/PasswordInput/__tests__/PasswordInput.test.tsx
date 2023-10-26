import React from 'react';

import {IconProps} from 'src/components/Icon/Icon';
import {fireEvent, render, screen} from 'test-utils';

import {PasswordInput} from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('should start with hidden password', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/i);

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  it('should the password and change icon to eyeoff, when the eyeon icon is pressed', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/i);

    const eyeIcon: IconProps['name'] = 'eyeOn';
    const eyeOffIcon: IconProps['name'] = 'eyeOff';

    fireEvent.press(screen.getByTestId(eyeIcon));

    expect(screen.getByTestId(eyeOffIcon)).toBeTruthy();

    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
