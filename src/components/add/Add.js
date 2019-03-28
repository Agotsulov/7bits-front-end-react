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
      console.log("Submit ")
    };

    onChange = (e) => this.setState({ title: e.target.value });

    onFocus = () => {
      this.setState({focus: !this.state.focus})
    };

    render() {
      let linkClassName;
      if (this.state.focus) {
        linkClassName = "add__submit-focus"
      } else {
        linkClassName = "add__submit"
      }
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
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onFocus.bind(this)}
                />
                <button
                    className={linkClassName}
                    onClick={this.onSubmit}
                />
            </form>
            );
    };
};

AddTask.propTypes = {
  addTask: PropTypes.func
};
