import { combineReducers } from "redux";
import authenticationReducer from "./auth/auth-reducer";
const rootReducer = combineReducers({
  authentication: authenticationReducer,
});
export default rootReducer;
