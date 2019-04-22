import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class TaskEdit extends React.Component {
  state = {
    hover: false,
    newTitle: ''
  };

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.changeTaskText(this.props.id, this.state.newTitle)
  };

  onChange = (e) => {
    this.setState({ newTitle: e.target.value });
  };

  render() {
    return (
        <form className="task"
              onMouseEnter={this.toggleHover.bind(this)}
              onMouseLeave={this.toggleHover.bind(this)}
              onSubmit={this.onSubmit}
        >
          <button className="task__button task__circle"/>
          <input
              className="task__input"
              type="text"
              autoFocus
              placeholder={this.props.title}
              value={this.state.newTitle}
              onChange={this.onChange}
          />
          <button className="task__button task__check-green task__left-element"
                  onClick={this.onSubmit}
          />
          <button className="task__button task__delete"

          />
        </form>
    );
  };
};

TaskEdit.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  changeTaskText: PropTypes.func
};

TaskEdit.defaultProps = {
  title: '',
  id: ''
};
