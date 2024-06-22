import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductType } from '../../types';


interface ProductsState {
  items: ProductType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

// Create async thunk for fetching products from an API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0]; // assuming your site is at tenantone.example.com
  const response = await axios.get<ProductType[]>(`http://${subdomain}.example.com:8000/api/products/`);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;