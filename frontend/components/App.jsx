const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const App = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },
  _handleLogOut() {
    SessionActions.logout();
  },
  greeting() {
    if (SessionStore.loggedIn()) {
    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Hi, {SessionStore.currentUser().name}!</h2>
    			<input className="header-button" type="submit" value="logout" onClick={ this._handleLogOut } />
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
