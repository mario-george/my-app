import { createSlice } from "@reduxjs/toolkit";


const initialState = {
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
 
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
