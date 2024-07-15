import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFromSubdomain } from "../../utils/Api";
import { HttpMethods, TokenType } from "../../types";

interface LoginData {
  email: string;
  password: string;
}

export const userLogin = createAsyncThunk(
  "auth/login",
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const data: TokenType = await fetchFromSubdomain<TokenType>(
        "users/token/",
        HttpMethods.POST,
        {
          email:  loginData.email,
          password: loginData.password,
        }
      );

      localStorage.setItem("userTokens", JSON.stringify(data));
      return data;
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
