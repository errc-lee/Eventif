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

  // Get events when component mounts
  useEffect(() => {
    props.getEvents();
  }, []);

  console.log('THIS IS THE EVENTLIST: ', props.eventList, typeof props.eventList);
  const events = props.eventList.map((eventObj) => {
    return (
      <div className="event">
        <h3>{eventObj.title} - {eventObj.datetime_local.slice(0, 10)}</h3>
        <h5>
          <img src={eventObj.performers[0].image} alt="event"></img>
          <p>Start Time: {eventObj.datetime_local.slice(11)}</p>
          <p>Lowest Price: ${eventObj.stats.lowest_sg_base_price}</p>
          <p>Average Price: ${eventObj.stats.average_price}</p>
          <p>Listings: {eventObj.stats.listing_count}</p>
          <a href={eventObj.url}>Book Tickets</a>
        </h5>
      </div>
    )
  });

  return (
    <div>
      <h1>Events on Today:</h1>
      <select>
        <option>Today</option>
        <option>Next 7 Days</option>
        <option>Next 30 Days</option>
      </select>
      <button type="button">
        Find Events
      </button>
      <h3>{`${props.eventList.length} events found:`}</h3>
      {events}
    </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)