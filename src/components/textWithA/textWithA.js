import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class TextWithA extends React.Component {
  render() {
    return (
        <React.Fragment>
          <div className='twa'>
            <div className='twa__text'>
              {this.props.text}
            </div>
            <a className='twa__text twa__text-href' href={this.props.href}>
              {this.props.atext}
            </a>
          </div>
        </React.Fragment>
    );
  };
};

TextWithA.propTypes = {
  text: PropTypes.string,
  atext: PropTypes.string,
  href: PropTypes.string
};
