/* eslint-disable react/prop-types */
import React from 'react';
import Crypto from './Crypto';

export const CryptoList = (props) => {
  const { cryptos } = props;

  return (
    <ul className="crypto-ul">
      {cryptos.map((crypto) => (
        <Crypto
          key={crypto.id}
          image={crypto.image}
          id={crypto.id}
          currentPrice={crypto.currentPrice}
          name={crypto.name}
          symbol={crypto.symbol}
        />
      ))}
    </ul>
  );
};

export default CryptoList;
