import React from 'react';
import {StyleSheet} from 'react-native';

import {ReactTestInstance} from 'react-test-renderer';
import {fireEvent, render, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button title" {...props} />);
  const buttonTitleElement = screen.queryByText('button title', {exact: false});
  const buttonElement = screen.queryByTestId('button');
  const activityElement = screen.queryByTestId('activity-indicator');

  return {
    buttonTitleElement,
    buttonElement,
    activityElement,
  };
}

describe('<Button />', () => {
  it('should call onPress function when it is pressed', () => {
    const mockedOnPress = jest.fn();

    const {buttonTitleElement} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(buttonTitleElement as ReactTestInstance);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('should not call onPress function when it is disabled and is pressed', () => {
    const mockedOnPress = jest.fn();

    const {buttonTitleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(buttonTitleElement as ReactTestInstance);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('should have gray text when it is disabled', () => {
    const {buttonTitleElement} = renderComponent({
      disabled: true,
    });

    const buttonStyle = StyleSheet.flatten(buttonTitleElement?.props.style);

    expect(buttonStyle.color).toBe(theme.colors.gray2);
  });

  describe('when button is loading', () => {
    it('should have activity indicator', () => {
      const {activityElement} = renderComponent({loading: true});

      expect(activityElement).toBeTruthy();
    });

    it('should not have title', () => {
      const {buttonTitleElement} = renderComponent({loading: true});

      expect(buttonTitleElement).toBeFalsy();
    });

    it('should be disabled', () => {
      const mockedFn = jest.fn();

      const {buttonElement} = renderComponent({
        loading: true,
        onPress: mockedFn,
      });

      fireEvent.press(buttonElement as ReactTestInstance);

      expect(mockedFn).not.toBeCalled();
    });
  });
});
