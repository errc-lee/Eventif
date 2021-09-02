// import actionType constants
import * as types from '../constants/actionTypes';

// ## USER REDUCER ACTION TYPES ##
export const updateLoginActionCreator = (field, value) => ({
  type: types.UPDATE_LOGIN,
  payload: { field, value },
});

export const sendLoginActionCreator = (email, password) => (
  (dispatch) => {
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    }).then(response => {
      console.log('RESPONSE FROM SERVER AFTER LOGIN ATTEMPT: ', response.status);
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Bad response from server when trying to login: ', response.status)
    })
      .then((loginData) => {
        console.log('LOGIN DATA IS: ', loginData);
        dispatch({
          type: types.LOGIN_SUCCESSFUL,
          payload: loginData,
        });
      })
      .catch(err => console.log('sendLoginActionCreator ERR:', err));
  });

export const updateSignupActionCreator = (field, value) => ({
  type: types.UPDATE_SIGNUP,
  payload: { field, value },
});

export const sendSignupActionCreator = (email, username, password) => (
  // Return a function handled by redux-thunk
  (dispatch) => {
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
    }).then((response) => {
      console.log('RESPONSE FROM SERVER AFTER SIGNUP ATTEMPT: ', response.status);
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Bad response from server when trying to sign up: ', response.status);
    })
      .then((loginData) => {
        console.log('SIGNUP DATA IS: ', loginData);
        dispatch({
          type: types.LOGIN_SUCCESSFUL,
          payload: loginData,
        });
      })
      .catch((err) => console.error('sendLoginActionCreator ERR:', err));
  }
);

export const sendLogoutActionCreator = () => ({
  type: types.SEND_LOGOUT,
});

// ## TICKET REDUCER ACTION TYPES ##
export const getEventsActionCreator = (dateRange) => (
  (dispatch) => {
    let endpoint = 'https://api.seatgeek.com/2/events?client_id=MjMwODQ2OTZ8MTYzMDA5MTEwMy4xMjAzNg&geoip=true&per_page=1000';
    const today = new Date().toISOString();
    let endDate = new Date();
    if (dateRange) {
      endDate.setDate(endDate.getDate() + parseInt(dateRange))
      endDate = endDate.toISOString();
    } else {
      endDate.setDate(endDate.getDate() + 1)
      endDate = endDate.toISOString();
    }

    endpoint += '&datetime_utc.gte=' + today + '&datetime_utc.lte=' + endDate;

    fetch(endpoint)
      .then(response => response.json())
      .then(data =>{
        dispatch({
          type: types.GET_EVENTS,
          payload: data.events,
        })
      });
  }
);

export const eventFilterActionCreator = (filterStr) => ({
  type: types.EVENT_FILTER,
  payload: filterStr,
});

// export const setDateRangeActionCreator = (dateRange) => ({
//   type: types.SET_DATE_RANGE,
//   payload: { dateRange },
// });
