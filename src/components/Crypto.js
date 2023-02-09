/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Crypto({
  image, id, currentPrice, name, symbol,
}) {
  return (
    <>
      <li className="list-items">
        <Link to={`/detail/${id}`} id={id} className="nav-link">
          <div className="main-Container">
            <img className="coin-image" src={image} alt={image} />
            <div className="crypto-details">
              <h2 className="main-page-each-li-detail">
                <span className="detail-feature-tag">Name:</span>
              &nbsp;
                {name}
              </h2>
              <h2 className="main-page-each-li-detail">
                <span className="detail-feature-tag">Symbol:</span>
              &nbsp;
                {symbol}
              </h2>
              <h2 className="main-page-each-li-detail">
                <span className="detail-feature-tag">Price:</span>
              &nbsp;
                {currentPrice}
              &nbsp;
                <span className="USD" style={{ color: '#0aa756' }}>$</span>
              </h2>
            </div>
            <Link to={`/detail/${id}`} id={id}>
              <div className="detail_btn">
                <i className="fa-solid fa-circle-arrow-right ml-auto detail-btn" />
              </div>
            </Link>
          </div>
        </Link>
      </li>
    </>
  );
}

Crypto.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
