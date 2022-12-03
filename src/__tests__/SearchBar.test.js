import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SearchBar from '../components/SearchBar';
import store from '../redux/store';

test('Testing if SearchBar component renders correctly', () => {
  const searchBarSnapshot = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(searchBarSnapshot).toMatchSnapshot();
});
