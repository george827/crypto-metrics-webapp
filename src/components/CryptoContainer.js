/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CryptoList } from './CryptoList';
import { LoadCryptos } from '../redux/cryptos/Cryptos';

export const CryptoContainer = () => {
  const coin = useSelector((state) => state.cryptos.cryptos);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(LoadCryptos());
  }, [dispatch]);

  return (
    <div className="all-content">
      <div className="main-container">
        <div className="seach-section">
          <div className="searchBox">
            <input
              type="text"
              className="searchInput"
              placeholder="Search..."
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="button" className="searchButton" onChange={(e) => setSearch(e.target.value)}><i className="fas fa-search" /></button>
          </div>
        </div>
      </div>
      <div className="crypto-items">
        <CryptoList cryptos={coin.filter((crypto) => (search.toLowerCase() === '' ? crypto : crypto.name.toLowerCase().includes(search.toLowerCase())))} />

      </div>
    </div>
  );
};

export default { CryptoContainer };
