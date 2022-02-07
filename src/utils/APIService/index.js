import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

axiosInstance.interceptors.request.use(
  async function configuration(config) {
    const token = await JSON.parse(sessionStorage.getItem("token"));
    if (token) config.headers.authorization = `${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async function (result) {
    return result;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const GET = async (url, params) => {
  let result = await axiosInstance.get(url, { params: params });
  return result;
};

export const POST = async (url, body, options) => {
  let result = await axiosInstance.post(url, body, options);
  return result;
};
