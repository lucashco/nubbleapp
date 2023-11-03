import {AuthCredentials} from '../../../authTypes';

export const mockedAuthCredentials: AuthCredentials = {
  token: 'access_token',
  tokenExpireAt: '2023-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh_token',
  user: {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    username: 'doejohn',
    email: 'doejohn@gmail.com',
    profileUrl: 'https://falkeurls.com',
    isOnline: false,
    fullName: 'John Doe',
  },
};
