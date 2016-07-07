const FollowActions = require('../../actions/FollowActions');
const IndexLink = require('react-router').IndexLink;
const Link = require('react-router').Link;
const React = require('react');
const SessionStore = require('../../stores/SessionStore');
const UserActions = require('../../actions/UserActions');
const UserStore = require('../../stores/UserStore');

const Profile = React.createClass({
  getInitialState() {
    this.userId = this.props.params.userId;
    const user = UserStore.profile() || {};
    return { user, currentUser: SessionStore.currentUser() };
  },
  componentDidMount() {
    this.userListener = UserStore.addListener(this.onChange);
    this.sessionListener = SessionStore.addListener(this.currentUserChange);
    UserActions.fetchUserProfile(this.userId);
  },
  componentWillReceiveProps(newProps) {
    this.userId = newProps.params.userId;
    UserActions.fetchUserProfile(this.userId);
  },
  componentWillUnmount() {
    this.sessionListener.remove();
    this.userListener.remove();
  },
  onChange() {
    const user = UserStore.profile();
    this.setState({ user });
  },
  currentUserChange() {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  toggleFollow() {
    const follow = {
      follower_id: this.state.currentUser.id,
      followee_id: this.state.user.id,
    };

    if (this.isFollowed() === 'Follow') {
      FollowActions.addFollow(follow);
    } else if (this.isFollowed() === 'Unfollow') {
      const currentUserFollows = this.state.currentUser.follows;
      const followId = currentUserFollows[this.state.user.id].follow_id;
      FollowActions.deleteFollow(followId);
    }
  },
  isCurrentUser() {
    if (this.state.currentUser.id === this.state.user.id) {
      return <div></div>;
    }
    return <div className="follow-button" onClick={this.toggleFollow}><h4>{this.isFollowed()}</h4></div>;
  },
  isFollowed() {
    const currentUserFollows = this.state.currentUser.follows;
    if (currentUserFollows && currentUserFollows[this.state.user.id]) {
        return 'Unfollow';
    }
    return 'Follow';
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
            <h3 className="header-name">{user.name}</h3>
            <div className="header-nav">
              <IndexLink
                to={indexPath}
                className="header-link hover-item"
                activeClassName="active-profile-link"
              >Boards</IndexLink>
              <Link
                to={pinPath}
                className="header-link hover-item"
                activeClassName="active-profile-link"
              >Pins</Link>
              <Link
                to={followersPath}
                className="header-link hover-item"
                activeClassName="active-profile-link"
              >Followers</Link>
              <Link
                to={followingPath}
                className="header-link hover-item"
                activeClassName="active-profile-link"
              >Following</Link>
            </div>
          </div>
          {this.isCurrentUser()}
        </hgroup>
        {React.cloneElement(this.props.children, { userId: this.userId })}
      </div>
    );
  },
});

module.exports = Profile;
