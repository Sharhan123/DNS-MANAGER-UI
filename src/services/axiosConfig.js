import axios from 'axios';

const axiosWithAuth = axios.create({
  baseURL: "https://dns-manager-api-kw7o-git-main-sharhan123s-projects.vercel.app",
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
