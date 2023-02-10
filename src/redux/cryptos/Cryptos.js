// coingencko api https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&page=USD
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CRYPTOS = 'GET_CRYPTOS';
const Apiurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&page=USD';

export const LoadCryptos = createAsyncThunk(GET_CRYPTOS, async () => {
  const response = await axios.get(Apiurl);
  const cryptos = Object.keys(response.data).map((key) => ({
    id: response.data[key].id,
    symbol: response.data[key].symbol,
    name: response.data[key].name,
    image: response.data[key].image,
    currentPrice: response.data[key].current_price,
    marketCap: response.data[key].market_cap,
    marketCapRank: response.data[key].market_cap_rank,
    fullyDilutedValuation: response.data[key].fully_diluted_valuation,
    totalVolume: response.data[key].total_volume,
    high24h: response.data[key].high_24h,
    low24h: response.data[key].low_24h,
    priceChange24h: response.data[key].price_change_24h,
    priceChangePercentage24h: response.data[key].price_change_percentage_24h,
    marketCapChange24h: response.data[key].market_cap_change_24h,
    marketCapChangePercentage24h: response.data[key].market_cap_change_percentage_24h,
    totalSupply: response.data[key].total_supply,
  }));
  return cryptos;
});

const initialState = {
  cryptos: [],
};

export function cryptosReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CRYPTOS}/fulfilled`:
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return state;
  }
}

export default { cryptosReducer, LoadCryptos };
