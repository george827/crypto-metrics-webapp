import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { DetailsContainer } from '../components/DetailsContainer';

import { store } from '../redux/configureStore';

it('Renders Crypto Home page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <DetailsContainer />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
