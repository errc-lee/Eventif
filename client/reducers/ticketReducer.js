import * as types from '../constants/actionTypes';
import React from 'react';

const initialState = {
  eventList: [],
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EVENTS:

  default:
    return state;
};

export default ticketReducer;
