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
      <article className="task"
               onMouseEnter={this.toggleHover.bind(this)}
               onMouseLeave={this.toggleHover.bind(this)}
      >
        <button className="task__button task__circle"
                onClick={this.props.completeTask.bind(this, this.props.id)}
        />
        <p className="task__title">
          {this.props.title}
        </p>
        <button className="task__button task__pencil task__left-element"
                style={linkStyle}
                onClick={this.props.editTask.bind(this, this.props.id)}
        />
        <button className="task__button task__delete"
                style={linkStyle}
                onClick={this.props.deleteTask.bind(this, this.props.id)}
        />
      </article>
    );
  };
};

Task.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  deleteTask: PropTypes.object.isRequired,
  editTask: PropTypes.object.isRequired,
  completeTask: PropTypes.object.isRequired
};

Task.defaultProps = {
  title: '',
  id: ''
};
