import * as types from '../constants/actionTypes';

const initialState = {
  eventList: [],
  dateRange: '',
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EVENTS:
      return {
        ...state,
        eventList: action.payload,
      };

    case types.SET_DATE_RANGE:
      return {
        ...state,
        dateRange: action.payload,
      };

    default:
      return state;
  }
};

export default ticketReducer;
