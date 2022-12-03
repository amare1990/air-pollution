import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Homepage from '../components/Homepage';
import store from '../redux/store';

test('Testing if Homepage component renders correctly', () => {
  const homepageSnapshot = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(homepageSnapshot).toMatchSnapshot();
});
