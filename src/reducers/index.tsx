import { pinReducer } from "./pinReducer";
import { combineReducers } from "redux";

export default combineReducers({
  pin: pinReducer,
});

//to compile multiple reducers into one file.
