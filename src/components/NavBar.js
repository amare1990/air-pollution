import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_weather.png';
import '../styles/NavBar.css';
import SearchBar from './SearchBar';

const NavBar = () => (
  <>
    <header className="header">
      <NavLink
        to="https://www.openweathermap.org"
      >

        <img src={logo} alt="logo" className="logo-img" />
      </NavLink>

      <SearchBar />

    </header>
  </>
);

export default NavBar;
