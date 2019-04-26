import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import './style.css';
import '../style.css';

import signup from '../../actions/user/signup';

import TextWithA from '../../components/textWithA/textWithA';
import LoginAndPassword from '../../components/loginAndPassword/loginAndPassword';

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

  checkFields = () => ((this.state.agree) && (!!this.state.password) && (!!this.state.username));

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.checkFields()) {
      this.props.signup(this.state.username, this.state.password).then(
          () => {
            console.log(this.props.error);
            if (this.props.error !== null) {
              this.setState({ error: true })
            } else {
              this.props.history.replace('/login');
            }
          }
      );
    }
  };

  render() {
    let linkClass;
    let textClass;
    if (!this.state.agree) {
      linkClass = 'checkbox-disabled';
      textClass = 'checkbox__text-gray';
    } else {
      linkClass = 'checkbox-checked';
      textClass = 'checkbox__text-black';
    }

    let checkboxClassName = `checkbox ${linkClass}`;
    let textClassName = `checkbox__text ${textClass}`;
    
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
          <div className='checkbox-pic-with-text'>
            <div className={checkboxClassName} onClick={this.onClickAgree}/>
            <div className={textClassName}>
              I agree to processing of personal data
            </div>
          </div>
          <button
              className='form__button signup__button'
              type='submit'
              disabled={!((this.state.agree) && (!!this.state.password) && (!!this.state.username))}
          >
            Sign up
          </button>
          <TextWithA text='Have an account' atext='Log in' href='/login'/>
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