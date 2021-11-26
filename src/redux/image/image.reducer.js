import ImageActionTypes from "./image.types";
import { addImage, removeImage } from "./image.utils";

const INITIAL_STATE = {
  imageList: [],
  isDeleted: false,
  searchText: "",
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ImageActionTypes.ADD_IMAGE:
      return {
        ...state,
        imageList: addImage(state.imageList, action.payload),
      };
    case ImageActionTypes.REMOVE_IMAGE:
      return {
        ...state,
        imageList: removeImage(state.imageList, action.payload),
      };
    case ImageActionTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
