import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class TaskDone extends React.Component {
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
        <div className="task__check"/>
        <p className="task__title">{this.props.title}</p>
        <button className="task__button task__delete task__left-element"
                style={linkStyle}
                onClick={this.props.deleteTask.bind(this, this.props.id)}
        />
      </article>
    );
  };
};

TaskDone.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  deleteTask: PropTypes.func
};

TaskDone.defaultProps = {
  title: '',
  id: ''
};
