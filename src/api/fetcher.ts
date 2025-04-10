import axios from "axios";

const backendUrl = "http://localhost:8080/api/";

const fetcher = axios.create({
  baseURL: backendUrl,
});

fetcher.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default fetcher;
