import React from 'react';
import uuid from 'react-uuid';
import { useSelector } from 'react-redux';
import '../styles/CityWeather.css';
import { NavLink } from 'react-router-dom';

function CityWeather() {
  const components = useSelector((state) => state.pollution.data);
  const aqi = useSelector((state) => state.pollution.main);

  const cityData = useSelector((state) => state.city.data);
  const cityName = cityData.name;

  let qualitativename = '';

  if (aqi.aqi === 1) {
    qualitativename = 'Good';
  } else if (aqi.aqi === 2) {
    qualitativename = 'Fair';
  } else if (aqi.aqi === 3) {
    qualitativename = 'Moderate';
  } else if (aqi.aqi === 4) {
    qualitativename = 'poor';
  } else if (aqi.aqi === 5) {
    qualitativename = 'Very poor';
  }

  if (aqi.aqi === undefined) {
    <h2>No city data yet</h2>;
    return (<h2>No city data yet</h2>);
  }

  return (
    <div className="details-wrapper" style={{ backgroundImage: 'url(/autumn_banner.jpg)' }}>
      <NavLink
        className="to-nav-link"
        to="/"
      >
        Home

      </NavLink>

      <div className="pollution-details">

        <div className="city-weather">

          <p className="aqi">

            <span className="circumvent">
              {' '}
              {aqi.aqi}
            </span>
            {' '}
            <span className="aqi-text">{aqi.aqi && ('(air quality index(aqi))')}</span>
            {' '}
          </p>
          <h1 className="city-name">
            {cityName}
          </h1>
          <p className="quality-text">

            {aqi.aqi ? ('Feels like') : null}
            {' '}
            {'  '}
            {' '}
            <span className="qualitative-name">
              {qualitativename}
            </span>
          </p>
          <table className="pollution-data-table">
            <thead>
              <tr>
                {components.map((component) => (
                  <th key={uuid()} className="data-item">{component[0]}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="pollution-data">
                {components.map((component) => (
                  <td key={uuid()} className="data-item ">{component[1]}</td>
                ))}
              </tr>
            </tbody>
          </table>
          <p className="temprature" />
        </div>
      </div>
    </div>
  );
}

export default CityWeather;
