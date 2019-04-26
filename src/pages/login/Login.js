import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import login from '../../actions/user/login';

import './style.css';
import '../style.css';

import TextWithA from '../../components/textWithA/textWithA';
import LoginAndPassword from '../../components/loginAndPassword/loginAndPassword';


class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

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

  onChangeUsername = (e) => this.setState({ username: e.target.value });

  onChangePassword = (e) => this.setState({ password: e.target.value });

  checkFields = () => ((!!this.state.password) && (!!this.state.username));

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.checkFields()) {
      this.props.login(this.state.username, this.state.password).then(
          () => {
            if (this.props.error !== null) {
              this.setState({ error: true })
            }
          }
      );
    }
  };

  render() {
    return (
        <form
            className='form'
            onSubmit={this.handleSubmit}
        >
          <LoginAndPassword
              error={this.state.error}
              username={this.state.username}
              password={this.state.password}
              onChangeUsername={this.onChangeUsername}
              onChangePassword={this.onChangePassword}
          />
          <button
              className='form__button login__button'
              type='submit'
              disabled={!((!!this.state.password) && (!!this.state.username))}
          >
            Log in
          </button>
          <TextWithA text="Don't have account" atext='Sign up' href='/signup'/>
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