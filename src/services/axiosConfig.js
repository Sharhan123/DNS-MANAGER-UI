import axios from 'axios';

const axiosWithAuth = axios.create({
  baseURL: "https://api-dns.onrender.com",
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
