import { ActionTypes } from "./actions";
import { useSelector } from "react-redux";
import { api } from "../../Services/api";
import { valueToPercent } from "@mui/base";

const setSelectedID = (response) => {
    return {
        type: ActionTypes.SET_SELECTED_ID,
        payload: response
      };
}

const setShowAlert = (response) => {
  return {
      type: ActionTypes.SET_SHOW_ALERT,
      payload: response
    };
}

const setAlertMessage = (response) => {
  return {
      type: ActionTypes.SET_ALERT_MESSAGE,
      payload: response
    };
}

const setAllProjects = (response) => {
  return {
    type: ActionTypes.SET_PROJECTS,
    payload: response
  };
}

const setAllTrackings = (response) => {
  return {
    type: ActionTypes.SET_ALL_TRACKINGS,
    payload: response
  };
}

const setFetchedList = (response) => {
  return {
    type: ActionTypes.SET_FETCHED_LIST,
    payload: response
  };
}

const setFlowStatusList = (response) => {
  return {
    type: ActionTypes.SET_FLOW_STATUS_LIST,
    payload: response
  };
}

const setMembers = (response) => {
  return {
    type: ActionTypes.SET_MEMBERS,
    payload: response
  };
}

const setTaskTypes = (response) => {
  return {
    type: ActionTypes.SET_TASK_TYPES,
    payload: response
  };
}


const setApprovalTrackings = (response) => {
  return {
    type: ActionTypes.SET_APPROVAL_TRACKING_LIST,
    payload: response
  };
}

const setFilters = (response) => {
  return {
    type: ActionTypes.SET_FILTERS,
    payload: response
  };
}

const resetTracking = () => {
  return {
    type : ActionTypes.RESET_TRACKING,
    payload : ""
  }
}

export { setSelectedID,setShowAlert,setAlertMessage,setAllProjects,setAllTrackings,setFetchedList,setFlowStatusList,setMembers,setTaskTypes,setApprovalTrackings,setFilters,resetTracking };
