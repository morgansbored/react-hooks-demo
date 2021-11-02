import { createSlice, configureStore } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./state";

const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    },
    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity !== 0 ? item.quantity - 1 : 0,
        };
      });
    },
    clear: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          quantity: 0,
        };
      });
    },
  },
});

const store = configureStore({ reducer: basketSlice.reducer });

export const { add, remove, clear } = basketSlice.actions;

export { basketSlice, store };
