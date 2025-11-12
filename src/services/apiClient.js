// src/api/apiClient.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://minimercado-fullstack.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar o token JWT em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
