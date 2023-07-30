import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer Mg.owY1lBBSvZ8hfe_nE7_eFQHPEmsbYFJhX1lnaK9IiKwAQI_bcSOlYcQTjWtp',
  },
});
