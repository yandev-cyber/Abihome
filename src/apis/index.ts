import axios from 'axios';
import { API_URL } from '@constants/environment';

export const ApiHandler = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
