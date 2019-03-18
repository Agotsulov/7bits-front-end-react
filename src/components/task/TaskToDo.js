import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

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
        <div className="task__circle"/>
        <p className="task__title">{this.props.title}</p>
        <div className="task__pencil task__left-element" style={linkStyle}/>
        <div className="task__delete" style={linkStyle}/>
      </article>
    );
  };
};

Task.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.string
};

Task.defaultProps = {
  title: '',
  pages: 'ToDo'
};
