import axios from 'axios'
const client = axios.create(
  {
    baseURL: import.meta.env.VITE_REACT_API_BASE_URL,
    withCredentials: true,
  }
)

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token"
  client.defaults.headers.common['Content-Type'] = 'application/json';
  const onSuccess = <T>(response: T): T => response;
  const onError = (error: Error) => {
    //optionally catch errors and ass additional logging here
    return error
  }
  return client(options).then(onSuccess).catch(onError)
}


client.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);