import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';
import store from './redux/store';

test('Testing if App component renders correctly', () => {
  const appSnapshot = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(appSnapshot).toMatchSnapshot();
});
