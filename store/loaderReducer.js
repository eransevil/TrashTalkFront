import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const loadingReducer = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setIsLoading} = loadingReducer.actions;

export default loadingReducer.reducer;
