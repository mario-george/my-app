import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  user: {
    token?: string | null;
    userID?: string | null;
    expirationDate?: Date | null | string;
  };
  loggedIn?: boolean | null;
}

const initialState: InitialState = {
  user: {
    token: null,
    userID: null,
    expirationDate: null,
  },
  loggedIn: false,
};

const userSlice = createSlice({
  // name of the slice
  name: "user",

  //initial state of the slice

  initialState,

  //This object contains the reducer functions for this slice of the Redux store. Reducer functions specify how the state should be updated in response to certain actions
  reducers: {
    login: (state, action) => {
      let { token, userID } = action.payload;
      let expirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
      let stringifiedObject = JSON.stringify({
        userID,
        token,
        expirationDate: expirationDate.toISOString(),
      });
      localStorage.setItem("user", stringifiedObject);
      localStorage.setItem("loggedIn", "true");
      state.user.token = token;
      state.user.userID = userID;
      state.user.expirationDate = expirationDate.toISOString();
      state.loggedIn = true;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("loggedIn");
      state.user.token = null;
      state.user.expirationDate = null;
      state.user.userID = null;
      state.loggedIn = false;
    },
    autoLogin: (state) => {
      let parsedObject = JSON.parse(localStorage.getItem("user") as string);
      if (
        parsedObject &&
        parsedObject.token &&
        parsedObject.userID &&
        state.user &&
        new Date() < new Date(parsedObject.expirationDate)
      ) {
        state.loggedIn = true;
        state.user.token = parsedObject.token;
        state.user.userID = parsedObject.userID;
        state.user.expirationDate = parsedObject.expirationDate;
        // stored as ISO String in redux global state
      }
    },
  },
});

export const { login, logout, autoLogin } = userSlice.actions;

export default userSlice.reducer;
