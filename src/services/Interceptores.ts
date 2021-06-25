import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  responseType: "json",
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default instance;
