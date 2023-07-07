import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../context/Status";
const base_url = "https://dummyjson.com";

const initialState = {
  status: "",
  products: [],
};

//fetching product using build in thunk on toolkit

export const productsFetch = createAsyncThunk("products/productsFetch", async () => {
  const response = await axios.get(`${base_url}/products`).then((res) => res.data);
  return response;
}); 

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export default productSlice.reducer;
