import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  isUserLoggedIn: false,
};

export const authReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = authReducer.actions;

export default authReducer.reducer;
