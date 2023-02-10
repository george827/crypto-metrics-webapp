import { LoadCryptos } from '../redux/cryptos/Cryptos';

describe('Load Cryptos', () => {
  test('gets the correct data', async () => {
    const data = await LoadCryptos();
    expect(data).toBeInstanceOf(Object);
    expect(data).not.toBeNull();
  });
});
