import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import pencil_gray from './pencil.svg'
import delete_gray from './delete.svg'

export default class Task extends React.Component {
  state = {
    hover: false
  };

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  render() {
    let linkStyle;
    if (this.state.hover) {
      linkStyle = {visibility: 'visible'}
    } else {
      linkStyle = {visibility: 'hidden'}
    }
    return (
      <article className="task" onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
        <p className="task__title">{this.props.title}</p>
        <div className="task__button-delete" style={linkStyle}/>
      </article>
    );
  };
};

Task.propTypes = {
  title: PropTypes.string
};

Task.defaultProps = {
  title: ''
};
