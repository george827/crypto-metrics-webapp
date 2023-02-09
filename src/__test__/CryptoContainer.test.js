import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { CryptoContainer } from '../components/CryptoContainer';

import { store } from '../redux/configureStore';

it('Renders Crypto Home page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CryptoContainer />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
