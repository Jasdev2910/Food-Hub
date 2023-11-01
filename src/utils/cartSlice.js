import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      let find = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (find >= 0) {
        state.items[find].card.info.inStock += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, inStock } = cartItem.card.info;
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
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, getCartTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
