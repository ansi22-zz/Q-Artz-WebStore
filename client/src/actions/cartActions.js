import axios from "axios";

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
} from "../components/constatnts/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const x = await axios.get("/api/products/" + productId);
    // console.log(x);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: x.data._id,
        name: x.data.name,
        image: x.data.image,
        price: x.data.price,
        stockcount: x.data.stockcount,
        qty,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {}
};

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

const saveShipping = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
  localStorage.setItem("shipping", JSON.stringify(data));
  console.log(data);
};

export { addToCart, removeFromCart, saveShipping };
