import React, { useEffect } from 'react';

// Import Redux Related:
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = ({ tickets }) => ({
  eventList: tickets.eventList,
});

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    dispatch(actions.getEventsActionCreator());
  },
});

// WatchList Component
const Main = (props) => {

  useEffect()

  return (
    <h1> Main Site Page !</h1>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)