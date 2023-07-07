import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/slice/productSlice";
import CartReducer from "../redux/slice//CartSlice";
import uiReducer from "./slice/uiSlice";
import WishListSlice from "./slice/WishListSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    ui:uiReducer,
    wishList:WishListSlice
  },
});
