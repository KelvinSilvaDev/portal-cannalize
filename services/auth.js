import axios from "axios";

import { useEffect, useState } from "react";

export const apii = axios.create({
  baseURL: `https://kellek.com.br/?rest_route=/wp/v2/`,
});
export default function agoraVai(apii) {
  const [token, setToken] = useState({});

  useEffect(
    (apii) => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const bodyParameters = {
        username: "nathan",
        password: "Universo@3x",
        token: "",
      };

      axios
        .post(
          `https://www.kellek.com.br/wp-json/jwt-auth/v1/token`,
          bodyParameters,
          config,
          apii
        )
        .then(console.log)
        .then((res) => {
          setToken(res.data.token);
        })
        .catch(console.log);
    },
    [token, apii]
  );
}

//export default api;
