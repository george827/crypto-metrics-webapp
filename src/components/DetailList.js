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
          <Details key={crypto.id} crypto={crypto} />
        ))}
    </ul>
  );
};

export default DetailsList;
