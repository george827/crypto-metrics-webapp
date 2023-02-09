/* eslint-disable react/prop-types */
import React from 'react';

export default function Details({
  image,
  currentPrice,
  name,
  symbol,
  marketCap,
  marketCapRank,
  totalVolume,
  high24h,
  low24h,
  priceChange24h,
  marketCapChange24h,
  totalSupply,
}) {
  // const { crypto } = props;

  return (
    <div data-testid="Details-1" className="detail-page-all">
      <div className="coin-img-sec">
        <img className="coin-img" src={image} alt={image} />
      </div>
      <div className="info-text">
        <p>Crypto Coin Info:</p>
      </div>
      <ul className="detail-ul-">
        <li className="detail-">
          <span className="coin-name">Name:</span>
          <span className="coin-res">
            {name}
            {' '}
            <i className="fa-solid fa-circle-arrow-right" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Symbol: </span>
          <span className="coin-res">
            {symbol}
            {' '}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Price: </span>
          <span className="coin-res">
            {currentPrice}
            {' '}
            $
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap:</span>
          <span className="coin-res">
            {marketCap}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap Rank:</span>
          <span className="coin-res">
            {marketCapRank}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Total Volume:</span>
          <span className="coin-res">
            {totalVolume}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Highest 24h:</span>
          <span className="coin-res">
            {high24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-each-li">
          <span className="coin-name">Lowest 24h</span>
          <span className="coin-res">
            {low24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Price Change 24h:</span>
          <span className="coin-res">
            {priceChange24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Market Cap Change</span>
          <span className="coin-res">
            {marketCapChange24h}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
        <li className="detail-">
          <span className="coin-name">Total Supply:</span>
          <span className="coin-res">
            {totalSupply}
            <i className="fa-solid fa-circle-arrow-right pl-2" />
          </span>
        </li>
      </ul>
    </div>
  );
}
