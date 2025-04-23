import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('token');

export const loginUser = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);

export const getTransactions = (page = 1) => axios.get(`${API_URL}/transaction?page=${page}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  }
});
export const getBudgets = () => axios.get(`${API_URL}/budget`, {
  headers: {
    Authorization: `Bearer ${token}`,
  }
});
export const getCategories = () => axios.get(`${API_URL}/category`, {
  headers: {
    Authorization: `Bearer ${token}`,
  }
});
