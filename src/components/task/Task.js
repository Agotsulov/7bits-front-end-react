import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Task extends React.Component {
  render() {
    return (
      <article className="task">
        <p className="task__title">{this.props.title}</p>
      </article>
    );
  };
};

Task.propTypes = {
  title: PropTypes.string
};

Task.defaultProps = {
  title: '',
  description: ''
};
