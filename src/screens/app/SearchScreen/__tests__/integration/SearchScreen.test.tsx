import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {act, fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();

  jest.useFakeTimers();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  it('should', async () => {
    // Outward flow

    // Navigate to the search screen
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // Find the input search and type the user name
    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');

    // skip debounce
    act(() => jest.runAllTimers());

    // Find two users as per the MSW mock
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    // Press on user name and navigate to the profile screen
    fireEvent.press(user1);

    // Expect to be at the profile screen
    const fullNameUser = await screen.findByText(userMocked.user1.full_name);
    expect(fullNameUser).toBeTruthy();

    // Back flow

    // Press the back button to navigate to the search screen
    const backButton = screen.getByTestId('screen-back-button');
    fireEvent.press(backButton);

    // Clear the search input
    const inputTextAfterback = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputTextAfterback, '');

    // skip debounce
    act(() => jest.runAllTimers());

    // Make sure the search history list appear
    const searchHistoryTitle = screen.getByText(/Buscas recentes/i);
    expect(searchHistoryTitle).toBeTruthy();

    // User 1 must be saved in history list
    const user1Afterback = screen.queryByText(userMocked.user1.username);
    expect(user1Afterback).toBeTruthy();

    // User 2 should not appear in the history list because he was not clicked
    const user2Afterback = screen.queryByText(userMocked.user2.username);
    expect(user2Afterback).toBeFalsy();

    // Remove user 1 from the search history list pressing the trash icon
    const trashButton = screen.getByTestId('trash');
    fireEvent.press(trashButton);

    // Make sure user 1 is removed from the search history list
    const user1AfterDeleted = screen.queryByText(userMocked.user1.username);
    expect(user1AfterDeleted).toBeFalsy();
  });
});
