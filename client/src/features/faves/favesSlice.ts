import { createSlice } from '@reduxjs/toolkit';
import { CartData } from '@/pages/Cart/Cart';
interface FavesState {
  faves: CartData[];
}
const initialState: FavesState = {
  faves: [],
};

export const favesSlice = createSlice({
  name: 'faves',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.faves.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.faves.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      state.faves = state.faves.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = favesSlice.actions;

export default favesSlice.reducer;
