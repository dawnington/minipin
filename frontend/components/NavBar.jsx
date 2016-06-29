const React = require('react');

const NavBar = React.createClass({
  render() {
    const user = this.props.user;
    return (
      <div id="nav-bar">
        {user.name}
      </div>
    )
  },
});

module.exports = NavBar;
