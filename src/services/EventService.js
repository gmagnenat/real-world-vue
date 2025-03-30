import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api/gmagnenat/fake-json-server',
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
