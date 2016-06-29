const React = require('react');
const hashHistory = require('react-router').hashHistory;
import { Link } from 'react-router';
const ErrorStore = require('../stores/ErrorStore');
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const SignupForm = React.createClass({
  getInitialState() {
    return { username: '', password: '', name: '' };
  },
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },
  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },
  onNameChange(e) {
    this.setState({ name: e.target.value });
  },
  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  },
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  },
  redirectIfLoggedIn() {
    if (SessionStore.loggedIn()) {
      hashHistory.push('/');
    }
  },
  fieldErrors(field) {
    const errors = ErrorStore.formErrors('signup');
    if (!errors[field]) { return; }

    const messages = errors[field].map((errorMsg, i) =>
      <li key={i}>{errorMsg}</li>
    );

    return <ul className="form-errors">{messages}</ul>;
  },
  login(e) {
    e.preventDefault();
    SessionActions.signup(this.state, () => {
      hashHistory.push('/');
    });
  },
  render() {
    return (
      <form className="signup-form" onSubmit={this.login}>
        <img src="http://res.cloudinary.com/dojinyoct/image/upload/v1467150952/MiniPin-logo_drsuop.png" alt="pin-logo" className="pin-logo" />
        <br />
        <label htmlFor="name">Name: {this.fieldErrors('name')}</label>
        &nbsp;
        <input
          type="text"
          value={this.state.name}
          id="username"
          onChange={this.onNameChange}
        />
        <br />
        <label htmlFor="username">Username: {this.fieldErrors('username')}</label>
        &nbsp;
        <input
          type="text"
          value={this.state.username}
          id="username"
          onChange={this.onUsernameChange}
        />
        <br />
        <label htmlFor="password">Password: {this.fieldErrors('password')}</label>
        &nbsp;
        <input
          type="password"
          value={this.state.password}
          id="password"
          onChange={this.onPasswordChange}
        />
        <br />
        <button>Sign Up</button>
        <br />
        Already have an account? <Link to="/login">Log In</Link>
      </form>
    );
  },
});

module.exports = SignupForm;
