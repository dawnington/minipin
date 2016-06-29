const React = require('react');
const SessionActions = require('../actions/SessionActions');

const NavBar = React.createClass({
  logout() {
    SessionActions.logout();
  },
  render() {
    const user = this.props.user;
    return (
      <div id="nav-bar">
        {user.name}
        <br/>
        <button className="nav-logout" onClick={this.logout}>Log Out</button>
      </div>
    )
  },
});

module.exports = NavBar;
