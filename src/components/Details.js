/* eslint-disable react/prop-types */
import React from 'react';
import '../index.css';

export default function Details(props) {
  const { crypto } = props;

  return (
    <div className="detail-page-all">
      <div className="coin-img-sec">
        <img className="coin-img" src={crypto.image} alt={crypto.image} />
      </div>
      <div className="info-text">
        <p>Crypto Coin Info:</p>
      </div>
      <ul className="detail-ul-">
        <li className="detail-">
          <span className="coin-name">Name:</span>
          <span className="coin-res">
            {crypto.name}
            {' '}
            <i className="fa-solid fa-circle-arrow-right" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Symbol: </span>
          <span className="coin-res">
            {crypto.symbol}
            {' '}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Price: </span>
          <span className="coin-res">
            {crypto.currentPrice}
            {' '}
            $
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap:</span>
          <span className="coin-res">
            {crypto.marketCap}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap Rank:</span>
          <span className="coin-res">
            {crypto.marketCapRank}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Total Volume:</span>
          <span className="coin-res">
            {crypto.totalVolume}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Highest 24h:</span>
          <span className="coin-res">
            {crypto.high24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-each-li">
          <span className="coin-name">Lowest 24h</span>
          <span className="coin-res">
            {crypto.low24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Price Change 24h:</span>
          <span className="coin-res">
            {crypto.priceChange24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap Change</span>
          <span className="coin-res">
            {crypto.marketCapChange24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap Change Percentage 24h: </span>
          <span className="coin-res">
            {crypto.marketCapChangePercentage24h}
            {' '}
            %
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Total Supply:</span>
          <span className="coin-res">
            {crypto.totalSupply}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
      </ul>
    </div>
  );
}
