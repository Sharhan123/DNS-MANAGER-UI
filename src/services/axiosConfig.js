import axios from 'axios';

const axiosWithAuth = axios.create({
  baseURL: 'http://localhost:9000/api',
});

axiosWithAuth.interceptors.request.use(
  config => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = token;
    }
    
    return config;
  },
  error => {
    
    return Promise.reject(error);
  }
);

export default axiosWithAuth;
