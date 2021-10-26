import { combineReducers } from "redux";

import customersReducer from "./customersReducer";
import cashReducer from "./cashReducer";

const rootReducer = combineReducers({
  customersReducer,
  cashReducer,
});

export default rootReducer;
