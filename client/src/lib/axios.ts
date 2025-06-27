import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const errorMessage = error.response.data.message || "An error occurred";
      return Promise.reject(errorMessage);
    }
    return Promise.reject(error.message || "An error occurred");
  },
);

export default axiosInstance;
