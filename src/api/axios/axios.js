import axios from "axios";
const authData = JSON.parse(localStorage.getItem("auth"));
export const apiBaseUrl = "https://menemarket-8699a792d090.herokuapp.com/api";

// create Axios instance
const axiosConfig = axios.create({
  baseURL: apiBaseUrl,
});

// Add a request interceptor
axiosConfig.interceptors.request.use(
  (config) => {
    const data = JSON.parse(localStorage.getItem("auth"));
    config.headers["Authorization"] = `Bearer ${data ? data.token : ""}`;
    return config;
  },
  (error) => {
    console.log("errorbek", error);
    return Promise.reject(error);
  }
);

export default axiosConfig;
