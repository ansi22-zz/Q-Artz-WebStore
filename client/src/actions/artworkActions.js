import axios from "axios";
import {
  ARTWORK_DETAILS_FAIL,
  ARTWORK_DETAILS_REQUEST,
  ARTWORK_DETAILS_SUCCESS,
  ARTWORK_LIST_FAIL,
  ARTWORK_LIST_REQUEST,
  ARTWORK_LIST_SUCCESS,
  ARTWORK_SAVE_FAIL,
  ARTWORK_SAVE_REQUEST,
  ARTWORK_SAVE_SUCCESS,
} from "../components/constatnts/artworkConstants";

export const listArtworks = () => async (dispatch) => {
  try {
    dispatch({ type: ARTWORK_LIST_REQUEST });
    const x = await axios.get("/api/products");
    // console.log(x.data);
    dispatch({ type: ARTWORK_LIST_SUCCESS, payload: x.data });
  } catch (error) {
    dispatch({ type: ARTWORK_LIST_FAIL, payload: error.message });
  }
};

export const saveArtwork = (artwork) => async (dispatch, getState) => {
  try {
    dispatch({ type: ARTWORK_SAVE_REQUEST, payload: artwork });
    const {
      userSignin: { userInfo },
    } = getState();
    console.log({ userInfo });
    if (!artwork._id) {
      const x = await axios.post("/api/products", artwork, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      dispatch({ type: ARTWORK_SAVE_SUCCESS, payload: x.data });
    } else {
      const x = await axios.put("/api/products/" + artwork._id, artwork, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      dispatch({ type: ARTWORK_SAVE_SUCCESS, payload: x.data });
    }
  } catch (error) {
    dispatch({ type: ARTWORK_SAVE_FAIL, payload: error.message });
  }
};

export const detailsArtwork = (artworkId) => async (dispatch) => {
  try {
    dispatch({ type: ARTWORK_DETAILS_REQUEST, payload: artworkId });
    const x = await axios.get("/api/products/" + artworkId);
    // console.log(x.data);
    dispatch({ type: ARTWORK_DETAILS_SUCCESS, payload: x.data });
  } catch (error) {
    dispatch({ type: ARTWORK_DETAILS_FAIL, payload: error.message });
  }
};

// export { listArtworks, detailsArtwork, saveArtwork };
