import axios from 'axios';

 

const API_URL = 'http://localhost:8080/api/auth';

 

export const login = async (username, password) => {

  try {

    const response = await axios.post(`${API_URL}/login`, {

        username: username,

        password: password,

    });

    if (response.data) {

    }

    return response.data;

  } catch (error) {

    throw new Error('Login failed. Please check your credentials.');

  }

};

export const register = async (payload) => {

    try {

      const response = await axios.post(`${API_URL}/register`, payload);

      if (response.data) {

        localStorage.setItem('token', response.data);

      }

      return response.data;

    } catch (error) {

      throw new Error('Login failed. Please check your credentials.');

    }

  };

 

export const logout = () => {

  localStorage.removeItem('token');

};

 

export const getToken = () => {

  return localStorage.getItem('token');

};