import { ActionTypes } from "./actions";

const changetheme = (response) => {
  localStorage.setItem("dark-mode", response);
  return {
    type: ActionTypes.CHANGE_THEME,
    payload: response,
  };
};

const changepanelView = (response) => {
  return {
    type: ActionTypes.CHANGE_VIEW,
    payload: response,
  };
};

export { changetheme, changepanelView };
