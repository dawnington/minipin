const FollowActions = require('../../actions/FollowActions');
const hashHistory = require('react-router').hashHistory;
const React = require('react');
const SessionStore = require('../../stores/SessionStore');

const UserIndexItem = React.createClass({
  getInitialState() {
    return { currentUser: SessionStore.currentUser() };
  },
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.userChange);
  },
  componentWillUnmount() {
    this.sessionListener.remove();
  },
  userChange() {
    this.setState({ currentUser: SessionStore.currentUser() });
  },
  redirectToProfile(e) {
    const profilePath = `users/${this.props.follow.user_id}`;
    hashHistory.push(profilePath);
  },
  toggleFollow() {
    const follow = {
      follower_id: this.state.currentUser.id,
      followee_id: this.props.follow.user_id,
    };

    if (this.isFollowed() === 'Follow') {
      FollowActions.addFollow(follow);
    } else if (this.isFollowed() === 'Unfollow') {
      FollowActions.deleteFollow(this.props.follow.id);
    }
  },
  isFollowed() {
    const currentUserFollows = this.state.currentUser.follows;
    if (currentUserFollows[this.props.follow.user_id]) {
      return 'Unfollow';
    }
    return 'Follow';
  },
  followButton() {
    if (this.state.currentUser.id === this.props.follow.user_id) {
      return <div></div>;
    }
    return (
      <button className="follow-button" onClick={this.toggleFollow}>
        <h4>{this.isFollowed()}</h4>
      </button>
    );
  },
  render() {
    const follow = this.props.follow;
    return (
      <div className="user-index-item">
        <div className="icon-name">
          <i className="fa fa-user"></i>
          <h3 className="user-name" onClick={this.redirectToProfile}>{follow.name}</h3>
        </div>
        {this.followButton()}
      </div>
    );
  },
});

module.exports = UserIndexItem;
