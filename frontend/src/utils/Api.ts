// src/utils/api.ts

import axios, { AxiosRequestConfig } from "axios";
import { HttpMethods } from "../types";

interface ApiRequestConfig extends AxiosRequestConfig {
  data?: any; // For POST, PUT, PATCH, and other methods that send a payload
}

export const fetchFromSubdomain = async <T>(
  endpoint: string,
  method: HttpMethods = HttpMethods.GET,
  data?: any,
  config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  }
): Promise<T> => {
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0]; // assuming your site is at tenantone.example.com
  const url = `http://${subdomain}.example.com:8000/${endpoint}`;

  const requestConfig: ApiRequestConfig = {
    url,
    method,
    ...config,
  };

  if (data) {
    requestConfig.data = data;
  }

  try {
    const response = await axios.request<T>(requestConfig);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};
