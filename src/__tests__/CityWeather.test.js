import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CityWeather from '../components/CityWeather';
import store from '../redux/store';

test('Testing if CityWeather component renders correctly', () => {
  const cityWeatherSnapshot = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CityWeather />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(cityWeatherSnapshot).toMatchSnapshot();
});
