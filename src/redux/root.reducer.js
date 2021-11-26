import { combineReducers } from "redux";
import imageReducer from "./image/image.reducer";

const rootReducer = combineReducers({
  image: imageReducer,
});

export default rootReducer;
