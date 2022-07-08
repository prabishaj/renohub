import { ActionTypes } from "./actions";
import jwt_decode from 'jwt-decode'

const checkLogin =  localStorage.getItem('isLoggedIn');
const authToken = localStorage.getItem('token');
let user = '';

if(authToken)
    user = jwt_decode(authToken);

  
const intialState = { 
    isLoggedIn : checkLogin,
    authToken : authToken,
    user: user
};

export const AuthReducer = (state = intialState, { type,payload }) => {
    switch (type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn : payload.isLoggedIn,
                authToken : payload.authToken,
                user: payload.user
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn : payload.isLoggedIn,
                authToken : payload.authToken,
                user: payload.user
            };
        default : 
            return state;     
    }
}