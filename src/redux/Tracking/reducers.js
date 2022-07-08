import { ActionTypes } from "./actions";

const intialState = {
  selectedId: '',
  showAlert : false,
  alertMessage : '',
  projects : [],
  allTrackings : [],
  allApprovalTrackings : [],
  allFlowStatus : [],
  allMembers : [],
  allTaskTypes : [],
  filters : {
     projects : [],
     status : [],
     reportedBy : [],
     assignedTo : [],
     priority : []
  },
  fetchedList : false,
};

export const TrackingReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.RESET_TRACKING:
      return  {
        projects : [],
        allTrackings : [],
        allFlowStatus : [],
       allMembers : [],
       allTaskTypes : [],
       filters:{}
      }; 
    case ActionTypes.SET_SELECTED_ID:
      return {
        ...state,
        selectedId : payload
      }; 
    case ActionTypes.SET_ALL_TRACKINGS:
      return {
        ...state,
        allTrackings : payload
      };      
    case ActionTypes.SET_SHOW_ALERT:
      return {
        ...state,
        showAlert : payload
      };  
    case ActionTypes.SET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage : payload
      }; 
    case ActionTypes.SET_PROJECTS:
      return {
        ...state,
        projects : payload
      };
    case ActionTypes.SET_PROJECTS:
      return {
        ...state,
        projects : payload
      };          
    case ActionTypes.SET_FETCHED_LIST:
      return {
        ...state,
        fetchedList : payload
      };     
    case ActionTypes.SET_FLOW_STATUS_LIST:
      return {
        ...state,
        allFlowStatus : payload
      };     
    case ActionTypes.SET_MEMBERS:
    return {
      ...state,
      allMembers : payload
    };
    case ActionTypes.SET_TASK_TYPES:
    return {
      ...state,
      allTaskTypes : payload
    };                
    case ActionTypes.SET_APPROVAL_TRACKING_LIST:
      return {
        ...state,
        allApprovalTrackings : payload
      };
    case ActionTypes.SET_FILTERS:
      return {
        ...state,
        filters : payload
      };                
    default:
      return state;
  }
};
