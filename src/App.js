import { Routes, Route } from 'react-router-dom';
import './App.css';
import CityWeather from './components/CityWeather';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="Details" element={<CityWeather />} />
        {/* <Route path="categ" element={<Homepage />} /> */}
      </Routes>
      <Homepage />
    </div>
  );
}

export default App;
