import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Homepage from '../components/Homepage';
import store from '../redux/store';

test('Testing if SearchBar component renders correctly', () => {
  const homepageBarSnapshot = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(homepageBarSnapshot).toMatchSnapshot();
});
