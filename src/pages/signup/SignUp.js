import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import signup from '../../actions/user/signup';

import './style.css';

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    agree: false,
    error: false
  };

  componentDidMount () {
    if (this.props.authorized) {
      this.props.history.replace('/');
    }
  }

  onChangeUsername = (e) => this.setState({ username: e.target.value });

  onChangePassword = (e) => this.setState({ password: e.target.value });

  onClickAgree = () => this.setState({ agree: !this.state.agree });

  changeError = () => this.setState({ error: !this.state.error });

  checkFields = () => ((this.state.agree) && (!!this.state.password) && (!!this.state.username));

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.checkFields()) {
      this.props.signup(this.state.username, this.state.password);
    }
    if (this.props.error === null) {
      this.changeError();
    }
  };

  render() {
    let linkClass;
    if (this.state.error) {
      linkClass = 'login-form__field-red';
    } else {
      linkClass = 'login-form__field-black';
    }
    let className = `login-form__field ${linkClass}`;
    return (
        <form
            className='login-form'
            onSubmit={this.handleSubmit}
        >
          <input
              className={className}
              name='login'
              placeholder='Login'
              value={this.state.username}
              onChange={this.onChangeUsername}
          />
          <input
              className={className}
              name='password'
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={this.onChangePassword}
          />
          <div className='signup__agree'>
            <input
                className='signup__checkbox'
                name='agree'
                type='checkbox'
                checked={this.state.agree}
                onChange={this.onClickAgree}
            /><span className='checker'/>
            <div className='signup__text'>
              I agree to processing of personal data
            </div>
          </div>
          <button
              className='login-form__button'
              type='submit'
              disabled={!((this.state.agree) && (!!this.state.password) && (!!this.state.username))}
          >
            Sign up
          </button>
          <div className='signup__text signup__text-acc'>
            Have an account
          </div>
          <a className='signup__text signup__text-href' href='/login'>
            Log in
          </a>
        </form>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  signup: bindActionCreators(signup, dispatch)
});

const mapStateToProps = (state) => ({
  authorized: state.userReducer.authorized,
  error: state.userReducer.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);