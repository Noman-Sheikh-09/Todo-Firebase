 import {LOGIN, LOGOUT, SIGNUP, GET_USER_ON_AUTH_STATE_CHANGE} from '../../types/Types'
import {auth, db} from '../../../config/Firebase'


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


  export const doSignup = (newUser) => async (dispatch) => {
    console.log("signup data in action", newUser);
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        newUser?.email,
        newUser?.password

      );
      var userData = userCredential.user;
      const dbData = await db.collection("users").add(newUser);
      console.log(dbData);
      
      dispatch({
        type: SIGNUP,
        payload: userData,
      });
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  
export const doGetActiveUser = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch({
          type: GET_USER_ON_AUTH_STATE_CHANGE,
          payload: user,
        });
      }
    });
  } catch (error) {
    console.log(error);
  } 
};