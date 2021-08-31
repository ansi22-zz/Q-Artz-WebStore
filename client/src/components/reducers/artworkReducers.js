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
} from "../constatnts/artworkConstants";

function artworkListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case ARTWORK_LIST_REQUEST:
      return { loading: true };
    case ARTWORK_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ARTWORK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function artworkDetailsReducer(state = { artwork: {} }, action) {
  switch (action.type) {
    case ARTWORK_DETAILS_REQUEST:
      return { loading: true };
    case ARTWORK_DETAILS_SUCCESS:
      return { loading: false, products: action.payload };
    case ARTWORK_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function artworkSaveReducer(state = { artwork: {} }, action) {
  switch (action.type) {
    case ARTWORK_SAVE_REQUEST:
      return { loading: true };
    case ARTWORK_SAVE_SUCCESS:
      return { loading: false, success: true, products: action.payload };
    case ARTWORK_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { artworkListReducer, artworkDetailsReducer, artworkSaveReducer };
