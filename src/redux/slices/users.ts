import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from 'types/user';
import Credentials from 'types/credentials';

interface UserSlice {
  registeredUsers: Record<string, User>;
  currentUser: User | undefined;
  loginError: string | undefined;
}

type UserReducers = {
  registerUser: CaseReducer<UserSlice, PayloadAction<User>>;
  login: CaseReducer<UserSlice, PayloadAction<Credentials>>;
  logout: CaseReducer<UserSlice>;
};

export const usersSlice = createSlice<UserSlice, UserReducers>({
  name: 'users',
  initialState: {
    registeredUsers: {},
    currentUser: undefined,
    loginError: undefined,
  },
  reducers: {
    registerUser: (state, action) => {
      state.registeredUsers = {
        ...state.registeredUsers,
        [action.payload.email]: action.payload,
      };
    },
    login: (state, action) => {
      console.log(action);
      const user = state.registeredUsers[action.payload.email];

      if (user !== undefined && user.password === action.payload.password) {
        state.currentUser = state.registeredUsers[action.payload.email];
        state.loginError = undefined;
      } else {
        state.loginError = 'errors.invalidCredentials';
      }
    },
    logout: (state) => {
      state.currentUser = undefined;
      state.loginError = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { registerUser, login, logout } = usersSlice.actions;

export default usersSlice.reducer;
