import axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../components/constatnts/userConstants";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    console.log(1);
    const x = await axios.post("/api/users/signin", { email, password });
    console.log(1);
    console.log(x);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: x.data });
    localStorage.setItem("userInfo", JSON.stringify(x.data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

export const signup = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
    payload: { name, email, password },
  });
  try {
    const x = await axios.post("/api/users/signup", {
      name,
      email,
      password,
    });

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: x.data,
    });

    localStorage.setItem("userInfo", JSON.stringify(x.data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  // localStorage.removeItem("cartItems");
  // localStorage.removeItem('shippingDetails');
  dispatch({ type: USER_SIGNOUT });
};
