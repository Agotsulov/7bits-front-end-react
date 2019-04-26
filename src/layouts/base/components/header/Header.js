import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import './style.css';
import logo from './logo_white.png'

import whoami from "../../../../actions/user/whoami";

class Header extends React.Component {

  componentDidMount() {
    this.props.whoami();
  }

  logout () {
    console.log(this.props);
    localStorage.removeItem('token');
    this.props.history.replace('/');
  }

  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <img className='header__logo' src={logo} href='#'/>
        </div>
        <div className='header__user' onClick={this.logout.bind(this)}>
          {this.props.username}
        </div>
      </header>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  whoami: bindActionCreators(whoami, dispatch)
});

const mapStateToProps = (state) => ({
  username: state.userReducer.username
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);