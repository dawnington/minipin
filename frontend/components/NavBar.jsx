const React = require('react');
const SessionActions = require('../actions/SessionActions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const NavBar = React.createClass({
  logout() {
    SessionActions.logout();
    hashHistory.push("/");
  },
  render() {
    const user = this.props.user;
    return (
      <div id="nav-bar">
        <div className="navigation">
          <div className="nav-item">
            <Link to="/">Feed</Link>
          </div>
          <h4 className="nav-header">My Boards</h4>
          {
            user.boards.map(board => {
              const boardLink = `/boards/${board.id}`;
              return (
                <div className="nav-item" key={board.id}>
                  <Link key={board.id} to={boardLink}>{board.name}</Link>
                </div>
              );
            })
          }
        </div>
        <div className="nav-profile">
          <div className="nav-item">{user.name}</div>
          <div className="nav-item" onClick={this.logout}>Log Out</div>
        </div>
      </div>
    )
  },
});

module.exports = NavBar;
