const hashHistory = require('react-router').hashHistory;
const IndexLink = require('react-router').IndexLink;
const Link = require('react-router').Link;
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
    const indexPath = `users/${user.id}`;
    const pinPath = `users/${user.id}/pins`;
    const followersPath = `users/${user.id}/followers`;
    const followingPath = `users/${user.id}/following`;
    return (
      <div className="main">
        <hgroup className="header">
          <div className="header-title">
            <h3 className="board-name">{user.name}</h3>
            <div className="header-nav">
              <IndexLink
                to={indexPath}
                className="header-link"
                activeClassName="active"
              >
                  Boards
              </IndexLink>
              <Link to={pinPath} className="header-link" activeClassName="active">Pins</Link>
              <Link to={followersPath} className="header-link" activeClassName="active">Followers</Link>
              <Link to={followingPath} className="header-link" activeClassName="active">Following</Link>
            </div>
          </div>
        </hgroup>
        {React.cloneElement(this.props.children, { userId: this.state.user.id })}
      </div>
    );
  },
});

module.exports = Profile;
