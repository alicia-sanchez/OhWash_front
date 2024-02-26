import AxiosPublic from "./AxiosPublic";
import { useEffect, useRef, useState } from 'react';

function RefreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");

  AxiosPublic.post("/token/refresh", {
    refresh_token: refreshToken,
  })
    .then((response) => {
      const newSession = response.data;
      localStorage.setItem("refreshToken", newSession.refresh_token);
      localStorage.setItem("token", newSession.token);
    })
    .catch(() => {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("token");
    });
}

export default RefreshToken;
