// src/apiService.js
import axios from 'axios';

const API_URL = 'https://backend-for-ohm-energy-test.vercel.app/send-email';

export const sendEmail = (data) => {
  return axios.post(`${API_URL}/send-email`, data);
};
