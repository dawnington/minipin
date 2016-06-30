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
  componentWillMount() {
    this.redirectIfLoggedIn();
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
      <li key={i}>{field} {errorMsg}</li>
    );

    return <ul className="form-errors">{messages}</ul>;
  },
  login(e) {
    e.preventDefault();
    SessionActions.signup(this.state, () => {
      hashHistory.push('/');
    });
  },
  guestLogin() {
    SessionActions.guestLogin();
  },
  render() {
    return (
      <form className="login-form" onSubmit={this.login}>
        <img src="http://res.cloudinary.com/dojinyoct/image/upload/v1467162069/MiniPin-logo_1_pjf9zc.png" alt="pin logo" className="login-logo" />
        <br />
        {this.fieldErrors('name')}
        <input
          type="text"
          value={this.state.name}
          id="name"
          onChange={this.onNameChange}
          placeholder="Name"
          className="login-input"
        />
        <br />
        {this.fieldErrors('username')}
        <input
          type="text"
          value={this.state.username}
          id="username"
          onChange={this.onUsernameChange}
          placeholder="Username"
          className="login-input"
        />
        <br />
        {this.fieldErrors('password')}
        <input
          type="password"
          value={this.state.password}
          id="password"
          onChange={this.onPasswordChange}
          placeholder="Create a Password"
          className="login-input"
        />
        <br />
        <button className="login-button">Sign Up</button>
        <br />
        <div className="demo-link-container">
          Already have an account? <Link to="/login">Log In</Link> or explore with a <a href="#" onClick={this.guestLogin}>Demo Account</a>
        </div>
      </form>
    );
  },
});

module.exports = SignupForm;
