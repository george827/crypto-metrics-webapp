/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Crypto(props) {
  const { crypto } = props;
  return (

    <li className="list-items">
      <Link to={`/detail/${crypto.id}`} id={crypto.id} className="nav-link">
        <div className="main-Container">
          <img className="coin-image" src={crypto.image} alt={crypto.image} />
          <div className="crypto-details">
            <h2 className="main-page-each-li-detail">
              <span className="detail-feature-tag">Name:</span>
              &nbsp;
              {crypto.name}
            </h2>
            <h2 className="main-page-each-li-detail">
              <span className="detail-feature-tag">Symbol:</span>
              &nbsp;
              {crypto.symbol.toUpperCase()}
            </h2>
            <h2 className="main-page-each-li-detail">
              <span className="detail-feature-tag">Price:</span>
              &nbsp;
              {crypto.currentPrice}
              &nbsp;
              <span className="USD" style={{ color: '#0aa756' }}>$</span>
            </h2>
          </div>
          <Link to={`/detail/${crypto.id}`} id={crypto.id}>
            <div className="detail_btn">
              <i className="fa-solid fa-circle-arrow-right ml-auto detail-btn" />
            </div>
          </Link>
        </div>
      </Link>
    </li>
  );
}

Crypto.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    currentPrice: PropTypes.number.isRequired,
    priceChangePercentage24h: PropTypes.number.isRequired,
    marketCapRank: PropTypes.number.isRequired,
  }).isRequired,
};
