import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class LoginAndPassword extends React.Component {
  render() {
    let linkClass;
    if (this.props.error) {
      linkClass = 'lap__field-red';
    } else {
      linkClass = 'lap__field-black';
    }
    let className = `lap__field ${linkClass}`;
    return (
        <React.Fragment>
          <input
              className={className}
              name='login'
              placeholder='Login'
              type='text'
              value={this.props.username}
              onChange={this.props.onChangeUsername}
          />
          <input
              className={className}
              name='password'
              placeholder='Password'
              type='password'
              value={this.props.password}
              onChange={this.props.onChangePassword}
          />
        </React.Fragment>
    );
  }
}

LoginAndPassword.propTypes = {
  error: PropTypes.bool,
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func

};
