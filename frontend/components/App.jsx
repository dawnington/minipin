const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');
const PinIndex = require('./PinIndex');
const NavBar = require('./NavBar');

const App = React.createClass({
  getInitialState() {
    return { user: SessionStore.currentUser() }
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
      <div className="main">
        <NavBar user={this.state.user} />
        {this.props.children}
      </div>
    );
  },
});

module.exports = App;
