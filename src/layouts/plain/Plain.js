import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Plain extends React.Component {
  render() {
    return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
    );
  };
};

Plain.propTypes = {
  children: PropTypes.node.isRequired
};