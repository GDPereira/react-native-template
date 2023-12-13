import { BASE_URL } from "@constants/http";
import axios from "axios";

const api = axios.create({ baseURL: BASE_URL });

const request = async <T>(endpoint: string, method: HttpMethod, data = {}) => {
  if (method === "get") return api.get<T>(endpoint);

  return api[method]<T>(endpoint, data);
};

export const HttpPost = <T>(endpoint: string, data = {}) =>
  request<T>(endpoint, "post", data);

export const HttpGet = <T>(endpoint: string) => request<T>(endpoint, "get");

export const HttpPut = <T>(endpoint: string, data = {}) =>
  request<T>(endpoint, "put", data);
