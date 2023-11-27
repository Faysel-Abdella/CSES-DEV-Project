import axios from "axios";

const customFetch = axios.create({
  // baseURL: "http://localhost:8080/api/v1",
  baseURL: "https://csec-dev-server-2.onrender.com/api/v1",
  withCredentials: true,
});

export default customFetch;
