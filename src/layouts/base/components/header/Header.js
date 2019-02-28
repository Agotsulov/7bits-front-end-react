import React from 'react';

import './style.css';
import logo from './logo_white.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <img className='header__logo' src={logo} href='#'/>
        </div>
      </header>
    );
  };
};
