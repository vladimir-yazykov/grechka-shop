import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../model/cart";
import type { RootState } from "../";

export type CartSliceState = {
  items: CartItem[];
  total: number;
};

const initialState: CartSliceState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct(state, { payload }: PayloadAction<CartItem>) {
      const index = state.items.findIndex(
        (item) => item.productId === payload.productId
      );

      state.total += payload.total;

      if (index === -1) {
        state.items.push(payload);
        return;
      }
      const { productId } = payload;
      const item = state.items[index];
      state.items[index] = {
        productId,
        quantity: item.quantity + payload.quantity,
        total: item.total + payload.total,
      };
    },
    removeProduct(state, { payload }: PayloadAction<CartItem>) {
      state.total -= payload.total;

      const index = state.items.findIndex(
        (item) => item.productId === payload.productId
      );
      if (index === -1) {
        return;
      }
      const item = state.items[index];
      const quantity = item.quantity - payload.quantity;

      if (quantity === 0) {
        state.items.splice(index, 1);
        return;
      }

      const total = item.total - payload.total;

      state.items[index] = {
        ...item,
        quantity,
        total,
      };
    },
  },
  selectors: {
    selectCartTotal: ({ total }) => total,
    selectTotalQuantity: ({ items }) =>
      items.reduce((acc, item) => acc + item.quantity, 0),
  },
});

export const selectCartItemById = (productId: number) => (state: RootState) =>
  state.cart.items.find((item) => item.productId === productId);

export const { selectCartTotal, selectTotalQuantity } = cartSlice.selectors;
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
