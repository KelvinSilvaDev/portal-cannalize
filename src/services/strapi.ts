import axios from "axios";

const strapi = axios.create({
  baseURL:
    process.env.REACT_APP_STRAPI_URL || "https://strapi.cannect.life/api",
});

export default strapi;
