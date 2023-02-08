import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsList } from './DetailList';
import { LoadCryptos } from '../redux/cryptos/Cryptos';

export const DetailsContainer = () => {
  const cryptos = useSelector((state) => state.cryptos.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadCryptos());
  }, [dispatch]);

  return (
    <div className="coin-items">
      <div className="main-container-details">
        <a className="back-pointer" href="/">
          <i className="fa-solid fa-left-long" />
        </a>
        <h2 className="details-sec">Details</h2>
      </div>
      <DetailsList cryptos={cryptos} />
    </div>
  );
};

export default { DetailsContainer };
