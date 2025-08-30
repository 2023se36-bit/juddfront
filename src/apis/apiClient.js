// src/apis/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // adjust to your backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token before every request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ✅ must match login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle expired/invalid tokens
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login"; // force logout
    }
    return Promise.reject(error);
  }
);

export default apiClient;
