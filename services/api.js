import axios from "axios";

const api = axios.create({
  baseURL: `https://cannalize.com.br/?rest_route=/wp/v2/`,
});

export default api;
