// import actionType constants
import * as types from '../constants/actionTypes';

// ## USER REDUCER ACTION TYPES ##
export const updateLoginActionCreator = (field, value) => ({
  type: types.UPDATE_LOGIN,
  payload: { field, value },
});

export const sendLoginActionCreator = (email, password) => {
  return (dispatch) => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password
      }),
    }).then(response => {
      console.log('RESPONSE FROM SERVER AFTER LOGIN ATTEMPT: ', response.status);
      if (response.status === 200) {
        dispatch({
          type: types.LOGIN_SUCCESSFUL,
        });
      }
    })
      .catch(err => console.log('sendLoginActionCreator ERR:', err));
  };
};

export const updateSignupActionCreator = (field, value) => ({
  type: types.UPDATE_SIGNUP,
  payload: { field, value },
});

export const sendSignupActionCreator = (email, username, password) => {
  return (dispatch) => {
    fetch('/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
    }).then(response => {
      console.log('RESPONSE FROM SERVER AFTER SIGNUP ATTEMPT: ', response.status);
      if (response.status === 200) {
        dispatch({
          type: types.LOGIN_SUCCESSFUL,
        });
      }
    })
      .catch(err => console.log('sendLoginActionCreator ERR:', err));
  };
};

export const sendLogoutActionCreator = () => ({
  type: types.SEND_LOGOUT,
  payload: { field, value },
});

// ## TICKET REDUCER ACTION TYPES ##
export const getEventsActionCreator = () => {

};
