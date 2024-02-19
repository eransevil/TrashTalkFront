// import instance from "../../../utils/HttpClient";
import axios from 'axios';
import {setUser, setUserError} from './authReducer';
import {setIsLoading} from './loaderReducer';

export const loginUser = userCredential => {
  return async dispatch => {
    try {
      dispatch(setIsLoading(true));
      const url = `http://localhost:3001/api/auth/login`;
      const response = await axios.post(url, userCredential);
      dispatch(setUser(response.data));
    } catch (error) {
      console.log('error', error);
      dispatch(setUserError('Incorrect username or password'));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
export const signUpUser = userCredential => {
  return async dispatch => {
    try {
      dispatch(setIsLoading(true));
      const url = `http://localhost:3001/api/auth/signup`;
      const response = await axios.post(url, userCredential);
      dispatch(setUser(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
