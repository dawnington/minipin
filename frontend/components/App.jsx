const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const App = React.createClass({
  getInitialState() {
    return { user: SessionStore.currentUser() }
  },
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.onChange);
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
  greeting() {
    if (SessionStore.loggedIn()) {
    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Hi, {this.state.user.name}!</h2>
          <button onClick={this.handleLogOut}>Log Out</button>
    		</hgroup>
    	);
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },
  render() {
    return (
      <div>
        <header>{this.greeting()}</header>
        {this.props.children}
      </div>
    );
  },
});

module.exports = App;
