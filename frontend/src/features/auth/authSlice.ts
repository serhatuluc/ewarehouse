import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";
import { jwtDecode } from "jwt-decode";
import { TokenType } from "../../types";

interface AuthState {
  loading: boolean;
  userInfo: any;
  userTokens:  TokenType | null;
  error: string | null;
  success: boolean;
}

const userTokens = localStorage.getItem("userTokens");

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userTokens: userTokens ? JSON.parse(userTokens) : null,
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = jwtDecode(payload.access);
        state.userTokens = payload;
        state.success = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      });
  },
});

export default authSlice.reducer;
