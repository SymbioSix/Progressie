import axios from "axios";

const apiSettings = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 7000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": "true",
  },
  withCredentials: true,
});

apiSettings.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);

apiSettings.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiSettings;