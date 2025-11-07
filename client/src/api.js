import axios from "axios";

const backendUrl = "http://https://vercel-kenj.onrender.com:5000";

const api = axios.create({
  baseURL: `${backendUrl}/api`,
  withCredentials: true,
});

export default api;