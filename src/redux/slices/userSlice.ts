import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  account_id: string;
  company_id: string;
  role: string;
}

interface InitialState {
  user: IUser | null;
}

const initialState: InitialState = {
  user:
    localStorage.getItem('user') != undefined
      ? JSON.parse(localStorage.getItem('user') as string)
      : null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
