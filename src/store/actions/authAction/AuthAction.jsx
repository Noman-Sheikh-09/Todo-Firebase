 import {LOGIN, LOGOUT, SIGNUP} from '../../types/Types'
import {auth} from '../../../config/Firebase'
 export const doLogin = (userData, navigate) => async (dispatch) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        userData.email,
        userData.password
      );
      var user = userCredential.user;
      console.log("user", user);
      dispatch({
        type: LOGIN,
        payload: user,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    
    }
  };
// Logout
  export const doLogout = (userData, navigate) => async (dispatch) => {
    try {
      const res = auth.signOut()
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
      console.log(error);
    
    }
  };