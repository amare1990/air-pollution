import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/current/current';
import cityToGeoData from '../redux/geocodedata';
import '../styles/SearchBar.css';
import apiID from '../http-commons';
import { fetchGeoCode } from '../redux/city/city';

function SearchBar() {
  const [city, setCity] = useState('');
  const [result, setSearch] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  let geoCodeURL = '';
  const handleSearch = async () => {
    setSearch(city);

    geoCodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiID}`;
    const geocode = await cityToGeoData(geoCodeURL);
    const { lat } = geocode[0];
    const { lon } = geocode[0];
    setLat(lat);
    setLon(lon);
  };
  useEffect(() => {
    if (lat && lon) {
      const urlCurrentPollutionData = 'http://api.openweathermap.org/data/2.5/air_pollution?'
        + `lat=${lat}&lon=${lon}&appid=${apiID}`;
      dispatch(fetchData(urlCurrentPollutionData));
      dispatch(fetchGeoCode(city));
    }
  }, [dispatch, geoCodeURL, lat, lon, city]);

  return (
    <>
      <div className="search-bar-wrapper">
        <input
          className="search-input"
          type="search"
          id={result}
          value={city}
          placeholder="search City"
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn search-btn"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
