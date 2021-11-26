import { createStore } from "redux";
import rootReducter from "./root.reducer";

const store = createStore(rootReducter);

export default store;
