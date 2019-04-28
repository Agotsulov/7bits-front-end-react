import React from 'react';

import './style.css';
import logo from './logo.png';

export default class Header extends React.Component {
  render() {
    return (
        <div>
          <img className='logo' src={logo} href='/'/>
        </div>
    );
  }
}
