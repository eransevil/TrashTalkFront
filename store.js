import {configureStore} from '@reduxjs/toolkit';
import authReducer from './store/authReducer';
import loaderReducer from './store/loaderReducer';

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    loaderReducer: loaderReducer,
  },
});
