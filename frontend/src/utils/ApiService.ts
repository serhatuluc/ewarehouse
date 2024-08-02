import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { ProductType } from '../types'
import { baseQueryWithReauth } from "./BaseQuery";

const getBaseUrl = (): string => {
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0]; // assuming your site is at tenantone.example.com
  const baseUrl = `http://${subdomain}.example.com:8000/`;
  return baseUrl;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  // baseQuery: fetchBaseQuery({
  //   baseUrl: getBaseUrl(),
  //   prepareHeaders: (headers, { getState }) => {
  //       const state = getState() as RootState;
  //       const tokens = state.auth.userTokens;
  //       if (tokens){
  //           headers.set('authorization', `Bearer ${tokens.access}`);
  //           return headers;
  //       }
  //   },
  // }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
        query: () => ({
            url: 'users/profile/',
            mehthod: 'GET',
        }),
    }),
    getTenantProducts: builder.query<ProductType[], void>({
        query: () => ({
            url: 'api/products/',
            mehthod: 'GET',
        }),
    }),
  }),
});


export const { useGetUserProfileQuery, useGetTenantProductsQuery } = authApi