import { combineReducers } from "redux";
import { LayoutReducer } from "./Layout/reducers";
import { AuthReducer } from "./Auth/reducers";
import { TrackingReducer } from "./Tracking/reducers";

const rootReducers = combineReducers({
  Layout: LayoutReducer,
  Auth: AuthReducer,
  Tracking:TrackingReducer
});

export default rootReducers;
