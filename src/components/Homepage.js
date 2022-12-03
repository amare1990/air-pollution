import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const cityData = useSelector((state) => state.city.data);
  const cityName = cityData.name;

  if (cityName === undefined) {
    return null;
  }

  const handleDetailsClick = () => {
    const path = '/Details';
    navigate(path);
  };

  return (
    <div className="city-categ">
      <p className="city-name-categ">{cityName}</p>
      <div className="city-data-categ">
        <p>
          Lat:
          {' '}
          {'      '}
          <span className="geo lat">{cityData.lat}</span>
          {'   ' }
        </p>
        <p>
          Lon:
          {'     '}
          <span className="geo lon">{cityData.lon}</span>
        </p>
      </div>
      <button
        type="button"
        className="btn btn-categ"
        onClick={handleDetailsClick}
      >
        See the details
      </button>

    </div>
  );
};

export default Homepage;
