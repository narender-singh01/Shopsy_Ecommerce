import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
  status: "",
};
const button = document.querySelector("buttons"); // get a reference to the button element

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        if (itemInCart.quantity === 2) {
          button.disabled = true; // disable the button after it has been clicked three times
        }
        itemInCart.quantity++;
        if (itemInCart.quantity) {
          toast.info(`Quantity of ${action.payload.title} Increased`, {
            position: "top-left",
          });
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.title} Added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem(state, action) {
      const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
      state.cart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state, action) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    IncreaseItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 2) {
        button.disabled = true; // disable the button after it has been clicked three times
      }
      item.quantity++;

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    filterCategory(state,action){
     state.cart.filter((FiltersData) => {
        return FiltersData.category === state.cart.category;
      });
    }
  },
});

export const { addToCart, removeItem, clearCart, decreaseItem, IncreaseItem,filterCategory } =
  CartSlice.actions;
export default CartSlice.reducer;
