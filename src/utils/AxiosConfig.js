import axios from "axios";
import memorizedRefreshTOken from "./RefreshToken";

function Axios() {
  axios.defaults.baseURL = "http://127.0.0.1:8000/api";

  axios.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;

      if (error?.response?.status === 401 && !config?.sent) {
        config.sent = true;

        const result = memorizedRefreshTOken();

        if (result?.token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${result?.token}`,
          };
        }

        return axios(config);
      }
      return Promise.reject(error);
    }
  );
}

export default Axios;
