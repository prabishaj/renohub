import {ActionTypes} from './actions';

const userLogin = response => 
{
     localStorage.setItem('isLoggedIn',response.isLoggedIn);
     localStorage.setItem('token',response.authToken);
     return {
        type: ActionTypes.LOGIN,
        payload : response
    }
}

const userLogout = response => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem('token');
    return {
      type: ActionTypes.LOGOUT,
      payload : response
    };
  };

export { userLogin,userLogout } ;