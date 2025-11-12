import axios from "axios";

const api = axios.create({
  baseURL: "https://minimercado-fullstack.onrender.com", // altere para seu endpoint no Render/Vercel depois
});

export default api;