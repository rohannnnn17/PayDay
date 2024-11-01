// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://184362bb-1e7a-4829-8348-e2751e0f39c3.mock.pstmn.io", // Replace with your mock server URL
});

export default api;
