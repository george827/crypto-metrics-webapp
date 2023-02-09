/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

export const DetailsList = (props) => {
  const { cryptos } = props;
  const params = useParams();

  const specificDetailToken = [...cryptos.filter((crypto) => crypto.id === params.id)];

  return (
    <ul className="details-ul">
      {specificDetailToken
        && specificDetailToken.map((crypto) => (
          <Details
            key={crypto.id}
            image={crypto.image}
            currentPrice={crypto.currentPrice}
            name={crypto.name}
            symbol={crypto.symbol}
            marketCap={crypto.symbol}
            marketCapRank={crypto.marketCap}
            totalVolume={crypto.totalVolume}
            high24h={crypto.high24h}
            low24h={crypto.low24h}
            priceChange24h={crypto.priceChange24h}
            marketCapChange24h={crypto.marketCapChange24h}
            marketCapChangePercentage24h={crypto.marketCapChangePercentage24h}
            totalSupply={crypto.totalSupply}
          />
        ))}
    </ul>
  );
};

export default DetailsList;
