import axios from 'axios';

const backendURL = import.meta.env.BACKEND;

import { getAuthCookie } from '@/features/services/cookies/cookies';

const token = getAuthCookie();
const createApi = (isAuth: boolean) =>
  axios.create({
    baseURL: backendURL,
    headers: {
      Authorization: isAuth && token ? `Bearer ${token}` : '',
    },
  });

export default createApi;
