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
        email,
        password,
      }),
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
      .then((loginData) => {
        console.log(loginData);
        dispatch({
          type: types.LOGIN_SUCCESSFUL,
          payload: loginData,
        });
      })
      .catch((err) => console.error('sendLoginActionCreator:', err));
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
        username,
        email,
        password,
      }),
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
      .then((loginData) => {
        dispatch({
          type: types.LOGIN_SUCCESSFUL,
          payload: loginData,
        });
      })
      .catch((err) => console.error('sendSignupActionCreator:', err));
  }
);

export const sendLogoutActionCreator = () => ({
  type: types.SEND_LOGOUT,
});

export const addWatchlistActionCreator = (event_id) => (
  (dispatch, getState) => {
    const { user_id } = getState().users;
    fetch('/user/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id, event_id,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Bad response from server when trying to sign up: ', response.status);
      })
      .catch((err) => console.error('sendLoginActionCreator:', err));
  });

export const getWatchlistActionCreator = () => (
  async (dispatch, getState) => {
    try {
      const { user_id } = getState().users;
      // Get all event_ids in watchlist
      const watchlist = await fetch(`/user/watchlist/${user_id}`).then((response) => response.json());
      const apiStart = 'https://api.seatgeek.com/2/events/';
      const apiEnd = '?client_id=MjMwODQ2OTZ8MTYzMDA5MTEwMy4xMjAzNg';
      const watchListEvents = [];
      for (let i = 0; i < watchlist.length; i += 1) {
        const event = await fetch(apiStart + watchlist[i].event_id + apiEnd).then((response) => response.json());
        watchListEvents.push(event);
      }

      dispatch({
        type: types.GET_WATCHLIST,
        payload: watchListEvents,
      });
    } catch (err) {
      console.error('getWatchlistActionCreator: ', err);
    }
  });

// ## TICKET REDUCER ACTION TYPES ##
export const getEventsActionCreator = (dateRange) => (
  (dispatch) => {
    let endpoint = 'https://api.seatgeek.com/2/events?client_id=MjMwODQ2OTZ8MTYzMDA5MTEwMy4xMjAzNg&geoip=true&per_page=1000';
    const today = new Date().toISOString();
    let endDate = new Date();
    if (dateRange) {
      endDate.setDate(endDate.getDate() + parseInt(dateRange));
      endDate = endDate.toISOString();
    } else {
      endDate.setDate(endDate.getDate() + 1);
      endDate = endDate.toISOString();
    }

    endpoint += `&datetime_utc.gte=${today}&datetime_utc.lte=${endDate}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: types.GET_EVENTS,
          payload: data.events,
        });
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
