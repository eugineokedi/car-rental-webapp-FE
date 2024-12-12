import axios from 'axios';

const API_URL = "";

export const signUp = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};

export const logIn = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  };