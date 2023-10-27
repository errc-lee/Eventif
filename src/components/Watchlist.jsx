import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Card from './Card';

// const mapStateToProps = ({ users }) => ({
//   watchlist: users.watchlist,
// });

const mapDispatchToProps = (dispatch) => ({
  getWatchlist: () => {
    dispatch(actions.getWatchlistActionCreator());
  },
});

// WatchList Component
const Watchlist = ({ watchlist, getWatchlist }) => {
  useEffect(() => {
    getWatchlist();
  }, []);

  const events = useMemo(() => watchlist.map((data) => (
    <Card isAuth={false} data={data} addWatchlist={null} key={data.id} />
  )), [watchlist]);

  return (
    <main className="container flex-column">
      <h1>Events In Your Watchlist:</h1>
      {/* EVENT CARDS */}
      <div className="card-container">
        {events.length ? (events) : <h3>No events found!</h3>}
      </div>
    </main>
  );
};

export default connect(null, mapDispatchToProps)(Watchlist);
