import { createSlice } from '@reduxjs/toolkit';

export interface FavesData {
  id: number;
  title: string;
  price: number;
  img: string;
  color: string;
  subtitle: string;
}

interface FavesState {
  faves: FavesData[];
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
