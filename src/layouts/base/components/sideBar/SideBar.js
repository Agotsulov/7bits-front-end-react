import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import done_logo from "./done_gray.svg"
import todo_logo from "./todo_gray.svg"

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
          <ul className={'nav-menu__list'}>
              <li className={'nav-menu__item'}>
                  <NavLink
                      exact
                      to={'/'}
                      className={'nav-menu__link nav-menu__todo'}
                      activeClassName={'nav-menu__link_active'}
                  >
                      <div className={'nav-menu__text'}>To Do</div>
                  </NavLink>
              </li>
              <li className={'nav-menu__item'}>
                  <NavLink
                      to={'/done'}
                      className={'nav-menu__link nav-menu__done'}
                      activeClassName={'nav-menu__link_active'}
                  >
                      <div className={'nav-menu__text'}>Done</div>
                  </NavLink>
              </li>
          </ul>
      </aside>
    );
  };
};

SideBar.propTypes = {
  className: PropTypes.string
};

SideBar.defaultProps = {
  className: ''
};
