const React = require('react');
const UserActions = require('../../actions/UserActions');
const UserStore = require('../../stores/UserStore');

const Profile = React.createClass({
  getInitialState() {
    this.userId = this.props.params.userId;
    const user = UserStore.find(this.userId) || {};
    return { user };
  },
  componentDidMount() {
    this.userListener = UserStore.addListener(this.onChange);
    UserActions.fetchSingleUser(this.userId);
  },
  componentWillReceiveProps(newProps) {
    this.userId = newProps.params.userId;
    UserActions.fetchSingleUser(this.userId);
  },
  componentWillUnmount() {
    this.userListener.remove();
  },
  onChange() {
    const user = UserStore.find(this.userId);
    this.setState({ user });
  },
  render() {
    const user = this.state.user;
    return (
      <div className="main">
        <hgroup className="header">
          <div className="header-title">
            <h3 className="board-name">{user.name}</h3>
          </div>
        </hgroup>
        {React.cloneElement(this.props.children, { user: this.state.user })}
      </div>
    )
  }
});

module.exports = Profile;
