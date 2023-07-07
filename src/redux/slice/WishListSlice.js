import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishList: JSON.parse(localStorage.getItem("wishList")) ?? [],
  status: "",
};
const button = document.querySelector("buttons"); // get a reference to the button element

export const WishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList(state, action) {
      const itemInWishList = state.wishList.find(
        (item) => item.id === action.payload.id
      );

      if (itemInWishList) {
        if (itemInWishList.quantity === 1) {
          button.disabled = true; // disable the button after it has been clicked three times
        }
        itemInWishList.quantity++;
        if (itemInWishList.quantity) {
          toast.info(`Quantity of ${action.payload.title} Increased`, {
            position: "top-left",
          });
        }
      } else {
        state.wishList.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.title} Added to wishList`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
    removeItemFromWishList(state, action) {
      const updatedWishList = state.wishList.filter(
        (p) => p.id !== action.payload.id
      );
      state.wishList = updatedWishList;
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
    clearWishList(state, action) {
      state.wishList = [];
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
  },
});

export const { addToWishList, removeItemFromWishList, clearWishList } =
  WishListSlice.actions;
export default WishListSlice.reducer;
