const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const LoginForm = React.createClass({
  getInitialState() {
    return { username: '', password: '' };
  },
  componentDidMount() {
    SessionStore.addListener(this.checkForUser);
    this.checkForUser();
  },
  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  },
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  },
  checkForUser() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push('/');
    }
  },
  login(e) {
    e.preventDefault();
    SessionActions.login(this.state, () => {
      hashHistory.push('/');
    });
  },
  render() {
    return (
      <form className="login-form" onSubmit={this.login}>
        <h2>Log In</h2>
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
      </form>
    );
  },
});

module.exports = LoginForm;
