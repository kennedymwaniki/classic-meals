import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  foodId: string;
  name: string;
  price: string;
  description: string;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload needs to be the foodId that we can remove(foodId)
      state.cart = state.cart.filter((item) => item.foodId !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

//exporting the current cart
export const getCart = (state: { cart: CartState }) => state.cart.cart;

export default cartSlice.reducer;
