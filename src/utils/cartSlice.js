import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    resName: null,
    resLocation: null,
  },
  reducers: {
    addItem: (state, action) => {
      let find = state?.items?.findIndex(
        (item) => item.card?.info?.id === action.payload.card?.info?.id
      );
      console.log(find);

      if (find >= 0) {
        state.items[find].card.info.inStock += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.items.reduce(
        (cartTotal, cartItem) => {
          const price = cartItem.card?.info.price;
          const inStock = cartItem.card?.info.inStock;
          console.log(price, inStock);
          const itemTotal = (price / 100) * inStock;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += inStock;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card?.info.id !== action.payload
      );
      if (state.items.length === 0) {
        state.resName = null;
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.resName = null;
    },
    addRestaurant: (state, action) => {
      const { resName, location } = action.payload;
      if (state.items.length >= 0) {
        state.resName = resName;
        state.resLocation = location;
      } else {
        state.resName = null;
        state.resLocation = null;
      }
    },
    increaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.card?.info.id === action.payload) {
          item.card.info.inStock += 1;
          return { ...item };
        } else {
          return item;
        }
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.card?.info.id === action.payload) {
          item.card.info.inStock -= 1;
          return { ...item };
        } else {
          return item;
        }
      });
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  getCartTotal,
  addRestaurant,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
