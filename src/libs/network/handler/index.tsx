import { QueryClient, QueryClientProvider } from "react-query";
import { PropsWithChildren } from "react";
import axios, { InternalAxiosRequestConfig } from "axios";
import logger from "@/libs/logger";

const api = axios.create();

function getReqId(config: InternalAxiosRequestConfig<any>): string {
  return config?.url || config.method || "API_CALL";
}

function getMethod(config: InternalAxiosRequestConfig<any>): string {
  return config.method?.toUpperCase() || "GET";
}

api.defaults.baseURL = process.env.EXPO_PUBLIC_API_URL;
api.defaults.headers.common["Content-Type"] = "application/json";

api.interceptors.request.use(async config => {
  const reqId = getReqId(config);
  const method = getMethod(config);
  logger.info(`[${method} ${reqId}]\tRequest:`, config);
  if (
    config.method?.toUpperCase() === "POST" ||
    config.method?.toUpperCase() === "PUT" ||
    config.method?.toUpperCase() === "PATCH"
  ) {
    logger.info("\tBody:", config.data);
  }

  return config;
});

api.interceptors.response.use(config => {
  const reqId = getReqId(config.config);
  const method = getMethod(config.config);
  logger.info(`[${method} ${reqId}]\tResponse:`, config.data);
  return config;
});

export async function get<Response>(url: string) {
  const response = await api.get<Response>(url);
  return response.data;
}

export async function post<Response, Request>(url: string, request?: Request) {
  let response = await api.post<Response>(url, request);
  return response.data;
}

export async function put<Response, Request>(url: string, request?: Request) {
  let response = await api.put<Response>(url, request);
  return response.data;
}

export async function remove<Response>(url: string) {
  let response = await api.delete<Response>(url);
  return response.data;
}

const queryClient = new QueryClient();

function NetworkProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default NetworkProvider;
