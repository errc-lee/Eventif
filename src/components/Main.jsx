import React, { useEffect, useMemo } from 'react';

// Import Redux Related:
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Card from './Card';

const mapStateToProps = ({ tickets }) => ({
  eventList: tickets.eventList,
});

const mapDispatchToProps = (dispatch) => ({
  getEvents: (dateRange) => {
    dispatch(actions.getEventsActionCreator(dateRange));
  },
  eventFilter: (filterStr) => {
    dispatch(actions.eventFilterActionCreator(filterStr));
  },
  addWatchlist: (event_id) => {
    dispatch(actions.addWatchlistActionCreator(event_id));
  },

});

// WatchList Component
const Main = ({
  addWatchlist, getEvents, eventFilter, eventList, authUser,
}) => {
  // Get events when component mounts
  useEffect(() => {
    getEvents();
  }, []);

  const events = useMemo(() => eventList.map((data) => (
    <Card isAuth={authUser} data={data} addWatchlist={addWatchlist} key={data.id} />
  )), [eventList]);

  const handleDateChange = (e) => getEvents(e.target.value);
  const handleFilterType = (e) => eventFilter(e.target.value);

  return (
    <main className="container flex-column">
      <h1>Events Near You:</h1>

      <div className="filter-results">
        <div>
          Select Date Range:
          <select
            onChange={handleDateChange}
          >
            <option value="">Next 24 Hours</option>
            <option value="7">Next 7 Days</option>
            <option value="30">Next 30 Days</option>
          </select>
        </div>

        <div>
          Filter Events by type:
          <select
            onChange={handleFilterType}
          >
            <option value="">All Events</option>
            <option value="sports">Sporting Events</option>
            <option value="concert">Concerts</option>
            <option value="theater">Theater</option>
            <option value="comedy">Comedy Shows</option>
          </select>
        </div>
      </div>

      <h3>{`${eventList.length} events found:`}</h3>

      {/* EVENT CARDS */}
      <div className="card-container">
        {events.length ? (events) : <h3>No events found!</h3>}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
