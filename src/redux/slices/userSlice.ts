import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
}

const initialState: UserState = {
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;