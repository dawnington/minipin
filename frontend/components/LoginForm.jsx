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
      hashHistory.push('/');
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
  guestLogin() {
    SessionActions.guestLogin();
  },
  render() {
    return (
      <div className="background">
        <div className="form-container">
          <form className="login-form" onSubmit={this.login}>
            <img src="https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_1000/v1467162069/Minipin/MiniPin-logo_1_pjf9zc.png" alt="pin logo" className="login-logo" />
            <br />
            {this.fieldErrors('base')}
            <input
              type="text"
              value={this.state.username}
              id="username"
              onChange={this.onUsernameChange}
              placeholder="Username"
              className="login-input"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              id="password"
              onChange={this.onPasswordChange}
              placeholder="Password"
              className="login-input"
            />
            <br />
            <button className="login-button">Log In</button>
            <br />
            <div className="demo-link-container">
              New user? <Link to="/signup">Sign Up</Link> or explore with a <a href="#" onClick={this.guestLogin}>Demo Account</a>
            </div>
          </form>
        </div>
      </div>
    );
  },
});

module.exports = LoginForm;
