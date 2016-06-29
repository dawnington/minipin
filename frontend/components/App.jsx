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
  greeting() {
    if (SessionStore.loggedIn()) {
    	return (
    		<hgroup className="header-group">
    		  <h2 className="header-name">Hi, {this.state.user.name}!</h2>
          <button onClick={this.handleLogOut}>Log Out</button>
    		</hgroup>
    	);
    }
  },
  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <PinIndex />
        {this.props.children}
      </div>
    );
  },
});

module.exports = App;
