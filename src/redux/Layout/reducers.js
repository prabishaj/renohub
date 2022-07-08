import { ActionTypes } from "./actions";
import configData from "../../config/config";

const checktheme = localStorage.getItem("dark-mode");
let darkmode = false;
if (checktheme) {
  if (checktheme !== "false") {
    darkmode = true;
   }
} else {
  darkmode = configData.darkMode;
}
const intialState = {
  darkmode: darkmode,
  panelview: configData.panelView,
};

export const LayoutReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CHANGE_THEME:
      return {
        ...state,
        darkmode: payload,
      };
    case ActionTypes.CHANGE_VIEW:
      return {
        ...state,
        panelview: payload,
      };
    default:
      return state;
  }
};
