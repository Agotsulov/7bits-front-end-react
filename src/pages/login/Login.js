import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import login from '../../actions/user/login';

import './style.css';

class Login extends React.Component {
  componentDidMount() {
    if (this.props.authorized) {
      this.props.history.replace('/');
    }
  }

  componentDidUpdate() {
    if (this.props.authorized) {
      this.props.history.replace('/');
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target['login'].value;
    const password = event.target['password'].value;

    this.props.login(username, password);

  };

  render() {
    return (
        <form
            className='login-form'
            onSubmit={this.handleSubmit}
        >
          <input
              className='login-form__field'
              name='login'
              placeholder='Login'
          />
          <input
              className='login-form__field'
              name='password'
              placeholder='Password'
              type='password'
          />
          <button
              className='login-form__button'
              type='submit'
          >
            Log in
          </button>
        </form>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(login, dispatch)
});

const mapStateToProps = (state) => ({
  authorized: state.userReducer.authorized
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);