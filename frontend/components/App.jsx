const hashHistory = require('react-router').hashHistory;
const NavBar = require('./NavBar');
const React = require('react');
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const App = React.createClass({
  getInitialState() {
    return { user: SessionStore.currentUser() };
  },
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.onChange);
    this.otherSessionListener = SessionStore.addListener(this.redirectIfNotLoggedIn);
  },
  componentWillUnmount() {
    this.sessionListener.remove();
  },
  onChange() {
    this.setState({ user: SessionStore.currentUser() });
  },
  handleLogOut() {
    SessionActions.logout();
  },
  redirectIfNotLoggedIn() {
    if (!SessionStore.loggedIn()) {
      hashHistory.push('login');
    }
  },
  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        {React.cloneElement(this.props.children, { userId: this.state.user.id })}
      </div>
    );
  },
});

module.exports = App;
