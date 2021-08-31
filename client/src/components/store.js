import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  artworkDetailsReducer,
  artworkListReducer,
  artworkSaveReducer,
} from "./reducers/artworkReducers";
// import { Cookie } from "js-cookie";
import { cartReducer } from "./reducers/cartReducers";
import { userSigninReducer, userSignupReducer } from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
} from "./reducers/orderReducers";
// console.log(Cookie.getJSON("cartItems"));
// const cartItems = [];
// cartItems = Cookie.getJSON("cartItems");

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const reducer = combineReducers({
  artworkList: artworkListReducer,
  artworkDetails: artworkDetailsReducer,
  artworkSave: artworkSaveReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);
export default store;
