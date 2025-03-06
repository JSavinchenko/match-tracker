import axios from 'axios';
import {MatchProps, OkResponse} from '../store/types';
import {BASE_URL} from '../constants/apiURL';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const fetchMatches = async (): Promise<MatchProps[]> => {
  const response = await apiClient.get<OkResponse>('/fronttemp');
  return response.data.data.matches;
};
