const React = require('react');
const SessionStore = require('../../stores/SessionStore');

const Profile = React.createClass({
  getInitialState() {
    const userId = this.props.params.userId;
    return { user:  SessionStore.currentUser() };
  },
  render() {
    const user = this.state.user;
    return (
      <div className="board">
        <hgroup className="header">
          <div className="header-title">
            <h3 className="board-name">{user.name}</h3>
          </div>
        </hgroup>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Profile;
