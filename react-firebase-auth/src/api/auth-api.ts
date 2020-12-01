import Axios, { AxiosRequestConfig } from 'axios';
import { getToken } from '../components/firebase/firebase-auth';

const instance = Axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = await getToken();
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export const getSecrets = async () => {
  const response = await instance.get<string[]>('/users/secrets');
  return response.data;
};
