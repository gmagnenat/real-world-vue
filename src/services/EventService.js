import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async getEvents() {
    return apiClient.get('/events');
  },

  async getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};
