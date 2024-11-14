import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  username: string;
}
const initialState: UserState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
