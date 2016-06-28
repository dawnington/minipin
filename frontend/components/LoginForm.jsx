const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const ErrorStore = require('../stores/ErrorStore');
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const LoginForm = React.createClass({
  getInitialState() {
    return { username: '', password: '' };
  },
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },
  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },
  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  },
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  },
  redirectIfLoggedIn() {
    if (SessionStore.loggedIn()) {
      this.context.router.push('/');
    }
  },
  fieldErrors(field) {
    const errors = ErrorStore.formErrors('login');
    if (!errors[field]) { return; }

    const messages = errors[field].map((errorMsg, i) =>
      <li key={i}>{errorMsg}</li>
    );

    return <ul className="form-errors">{messages}</ul>;
  },
  login(e) {
    e.preventDefault();
    SessionActions.login(this.state);
  },
  render() {
    return (
      <form className="login-form" onSubmit={this.login}>
        <img src="http://res.cloudinary.com/dojinyoct/image/upload/v1467150952/MiniPin-logo_drsuop.png" alt="pin-logo" className="pin-logo" />
        <br />
        {this.fieldErrors('base')}
        <label htmlFor="username">Username:</label>
        &nbsp;
        <input
          type="text"
          value={this.state.username}
          id="username"
          onChange={this.onUsernameChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        &nbsp;
        <input
          type="password"
          value={this.state.password}
          id="password"
          onChange={this.onPasswordChange}
        />
        <br />
        <button>Log In</button>
        <br />
        New user? <Link to="signup">Sign Up</Link>
      </form>
    );
  },
});

module.exports = LoginForm;
