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
  chooseDate: (value) => {
    dispatch(actions.getEventsActionCreator(range));
  },
});

// WatchList Component
const Main = (props) => {
  // Get events when component mounts
  useEffect(() => {
    props.getEvents();
  }, []);

  console.log('THIS IS THE EVENTLIST: ', props.eventList, typeof props.eventList);
  const events = props.eventList.map((eventObj) => (
    <div className="event-card card mb-3">
      <div className="row g-0">

        <div className="col-md-4 col-lg-3">
          <img src={eventObj.performers[0].image} className="img-fluid rounded-start" alt="event"/>
        </div>

        <div className="col-md-8 col-lg-9">
          <div className="card-body">
            <h5 className="card-title">{eventObj.title} <span className="card-subtitle"></span></h5>
            <h6 className="card-subtitle">{eventObj.datetime_local.slice(11)} - {eventObj.datetime_local.slice(0, 10)}</h6>

            {eventObj.stats.listing_count
              ? (
                <p className="card-text prices">
                  <span>
                    Lowest Price: ${eventObj.stats.lowest_sg_base_price}
                  </span>
                  <span>
                    Average Price: ${eventObj.stats.average_price}
                  </span>
                  <span>
                    Num. Listings: {eventObj.stats.listing_count}
                  </span>
                </p>
              )
              : (
                <p className="card-text prices">
                  No tickets currently listed!
                </p>
              )}
            <div className="btn-group">
              <a className="btn btn-sm btn-primary" href={eventObj.url}>Book Tickets</a>
              <a className="btn btn-sm btn-info" href={eventObj.url}>Add to Watchlist</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  ));

  return (
    <div className="container">
      <h1>Events Near You:</h1>
      <select onChange={(e) => props.chooseDate('value', e.target.value)}>
        <option value="">Today</option>
        <option value="7">Next 7 Days</option>
        <option value="30">Next 30 Days</option>
      </select>
      <button type="button"
      // onClick {() => props. > }
      >
        Find Events
      </button>
      <h3>{`${props.eventList.length} events found:`}</h3>

      {/* EVENT CARDS */}
      <div className="row">
        {events}
      </div>
    </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)