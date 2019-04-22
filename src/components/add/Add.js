import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class AddTask extends React.Component {
    state = {
      title: "",
      focus: false
    };

    onSubmit = (e) => {
      e.preventDefault();
      this.props.addTask(this.state.title);
      this.setState({ title: '' });
    };

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
      return (
            <form className="add__form"
                onSubmit={this.onSubmit}
            >
                <input
                    className="add__input"
                    type="text"
                    placeholder="Type your new task"
                    value={this.state.title}
                    onChange={this.onChange.bind(this)}
                />
                <button
                    className="add__submit"
                    disabled={!this.state.title}
                    onClick={this.onSubmit}
                >
                  Create
                </button>
            </form>
            );
    };
};

AddTask.propTypes = {
  addTask: PropTypes.func
};
