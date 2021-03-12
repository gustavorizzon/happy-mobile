import axios from 'axios';
import Environment from '../../environment.json';

const api = axios.create({
  baseURL: Environment.apiUrl,
});

export default api;
