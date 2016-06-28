const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const SignupForm = React.createClass({
  getInitialState() {
    return { username: '', password: '', name: '' };
  },
  componentDidMount() {
    SessionStore.addListener(this.checkForUser);
    this.checkForUser();
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
  checkForUser() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push('/');
    }
  },
  login(e) {
    e.preventDefault();
    SessionActions.signup(this.state, () => {
      hashHistory.push('/');
    });
  },
  render() {
    return (
      <form className="bench-form" onSubmit={this.login}>
        <h2>Sign Up</h2>
        <label htmlFor="name">Name:</label>
        &nbsp;
        <input
          type="text"
          value={this.state.name}
          id="username"
          onChange={this.onNameChange}
        />
        <br />
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
        <button>Sign Up</button>
      </form>
    );
  },
});

module.exports = SignupForm;
