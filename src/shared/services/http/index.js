import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 10000,
});

http.interceptors.request.use(
    config => {
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export default http;
