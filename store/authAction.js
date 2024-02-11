// import instance from "../../../utils/HttpClient";
import axios from 'axios';

export const loginUser = userCredential => {
  return async dispatch => {
    try {
      const url = `http://localhost:3001/api/auth/login`;
      const response = await axios.post(url, userCredential);
      console.log('response', response);
      //   dispatch(setIsClinicOpenNow(isOpenRes.data.isOpen));
      // } else throw Error(`respone status - ${isOpenRes.status}`);
    } catch (error) {
      console.log(error);
      // writeLog(`error fetching is clinic open now ${error}`);
      // dispatch(getIsClinicOpenNowError());
    }
  };
};
