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
  render() {
    const follow = this.props.follow;
    return (
      <div className="user-index-item">
        <h3 onClick={this.redirectToProfile}>{follow.name}</h3>
        <button className="follow-button" onClick={this.toggleFollow}>
          <h4>{this.isFollowed()}</h4>
        </button>
      </div>
    );
  },
});

module.exports = UserIndexItem;
