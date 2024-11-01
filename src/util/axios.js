// src/services/axios.js
import axios from "axios";

// Create an instance with custom settings
const api = axios.create({
  baseURL: "http://localhost:3001/api/", // Updated base URL for your API
  timeout: 5000, // Request timeout (optional)
});

// Intercept requests to add headers or modify config (e.g., add auth token)
api.interceptors.request.use(
  (config) => {
    // For example, add an authorization token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept responses for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors (e.g., refresh token, log out user, etc.)
    // You can add error handling logic here if needed
    console.error(
      "API error:",
      error.response ? error.response.data : error.message
    );
    return Promise.reject(error);
  }
);

export default api;
