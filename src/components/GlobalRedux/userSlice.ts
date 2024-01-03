import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({

  // name of the slice
  name: 'user',
  
  //initial state of the slice

  initialState,
  
  
  //This object contains the reducer functions for this slice of the Redux store. Reducer functions specify how the state should be updated in response to certain actions
  reducers: {

  },
});


export default userSlice.reducer;
