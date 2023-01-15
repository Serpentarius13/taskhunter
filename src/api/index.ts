import axios from "axios";

const backendURL = import.meta.env.BACKEND;

import { getAuth } from "@/services/cookies/cookies";

const token = getAuth();
const createApi = (isAuth: boolean) =>
  axios.create({
    baseURL: backendURL,
    headers: {
      Authorization: isAuth && token ? `Bearer ${token}` : "",
    },
  });

export default createApi
