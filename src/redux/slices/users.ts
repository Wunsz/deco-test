import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from 'types/user';
import Credentials from 'types/credentials';
import RemindPasswordCredentials from 'types/remindPasswordCredentials';

interface UserSlice {
  registeredUsers: Record<string, User>;
  currentUser: User | undefined;
  remindedUser: User | undefined;
  loginError: string | undefined;
}

type UserReducers = {
  registerUser: CaseReducer<UserSlice, PayloadAction<User>>;
  login: CaseReducer<UserSlice, PayloadAction<Credentials>>;
  logout: CaseReducer<UserSlice>;
  remindPassword: CaseReducer<UserSlice, PayloadAction<RemindPasswordCredentials>>;
  resetRemindedUser: CaseReducer<UserSlice>;
};

export const usersSlice = createSlice<UserSlice, UserReducers>({
  name: 'users',
  initialState: {
    registeredUsers: {},
    currentUser: undefined,
    remindedUser: undefined,
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
    remindPassword: (state, action) => {
      const user = state.registeredUsers[action.payload.email];

      if (user?.name === action.payload.name) {
        state.remindedUser = user;
      }
    },
    resetRemindedUser: state => {
      state.remindedUser = undefined;
    }
  },
});

// Action creators are generated for each case reducer function
export const { registerUser, login, logout, remindPassword, resetRemindedUser } = usersSlice.actions;

export default usersSlice.reducer;
