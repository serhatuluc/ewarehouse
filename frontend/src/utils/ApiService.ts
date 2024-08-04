import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./BaseQuery";
import {
  ProductOrderingInformation,
  ProductProps,
  ProductSpecification,
  ProductType,
} from "../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "users/profile/",
        mehthod: "GET",
      }),
    }),
    getTenantProducts: builder.query<ProductType[], void>({
      query: () => ({
        url: "api/products/",
        mehthod: "GET",
      }),
    }),
    getSingleProduct: builder.query<ProductType, string>({
      query: (productId) => ({
        url: `api/products/${productId}/`,
        mehthod: "GET",
      }),
    }),
    getProductSpesifications: builder.query<ProductSpecification[], string>({
      query: (productId) => ({
        url: `api/products/spesifications/${productId}/`,
        mehthod: "GET",
      }),
    }),
    getProductOrderInfo: builder.query<ProductOrderingInformation[], string>({
      query: (productId) => ({
        url: `api/products/ordering-informations/${productId}/`,
        mehthod: "GET",
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetTenantProductsQuery,
  useGetSingleProductQuery,
  useGetProductSpesificationsQuery,
  useGetProductOrderInfoQuery,
} = authApi;
