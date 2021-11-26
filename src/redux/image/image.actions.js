import ImageActionTypes from "./image.types";

export const addImage = (image) => ({
  type: ImageActionTypes.ADD_IMAGE,
  payload: image,
});

export const removeImage = (image) => ({
  type: ImageActionTypes.REMOVE_IMAGE,
  payload: image,
});

export const setSearchText = (searchText) => ({
  type: ImageActionTypes.SET_SEARCH_TEXT,
  payload: searchText,
});