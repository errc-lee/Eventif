import React from 'react';

const Card = ({ addWatchlist, isAuth, data }) => {
  const {
    performers,
    title,
    datetime_local: dateTimeLocal,
    stats,
    url,
    id,
  } = data;

  const {
    listing_count: listingCount,
    lowest_sg_base_price: lowestPrice,
    average_price: averagePrice,
  } = stats;

  const date = dateTimeLocal.slice(0, 10);
  const time = dateTimeLocal.slice(11);

  return (
    <div className="card">
      <div className="card-image">
        <img src={performers[0].image} alt="event-image" />
        {isAuth && (
          <button
            type="button"
            className="watchlist-btn"
            onClick={() => addWatchlist(id)}
          >
            <span className="watchlist-text uppercase bold">
              Add to Watchlist
            </span>
          </button>
        )}
        <div className="card-subheading">
          <span className="date">
            {date}
          </span>
          <span className="time">
            {time}
          </span>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-heading">
          {title}
        </h5>

        <div className="card-prices">
          {listingCount
            ? (
              <div className="price-info">
                <div className="card-price">
                  <span className="price-label">Price:</span>
                  <div className="price-text">
                    <span>
                      {`Lowest $${lowestPrice}`}
                    </span>
                    <span>
                      {`Avg: $${averagePrice}`}
                    </span>
                  </div>
                </div>
                <div className="card-listing">
                  <span className="listing-label">Listings:</span>
                  <span>{listingCount}</span>
                </div>
              </div>
            )
            : (
              <span>
                No tickets currently listed!
              </span>
            )}
        </div>
      </div>
    </div>
  );
};

export default Card;
