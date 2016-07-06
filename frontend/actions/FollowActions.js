const Dispatcher = require('../dispatcher/Dispatcher');
const FollowApiUtil = require('../util/FollowApiUtil');
const FollowConstants = require('../constants/FollowConstants');

module.exports = {
  fetchFollowers(id) {
    FollowApiUtil.fetchFollowers(id, this.receiveFollows);
  },
  fetchFollowees(id) {
    FollowApiUtil.fetchFollowees(id, this.receiveFollows);
  },
  addFollow(follow) {
    FollowApiUtil.createFollow(follow, this.receiveFollow);
  },
  deleteFollow(id) {
    FollowApiUtil.deleteFollow(id, this.removeFollow);
  },
  receiveFollows(follows) {
    Dispatcher.dispatch({
      actionType: FollowConstants.FOLLOWS_RECEIVED,
      follows,
    });
  },
  receiveFollow(follow) {
    Dispatcher.dispatch({
      actionType: FollowConstants.NEW_FOLLOW,
      follow,
    });
  },
  removeFollow(follow) {
    Dispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_REMOVED,
      follow,
    });
  },
  emptyStore() {
    Dispatcher.dispatch({
      actionType: FollowConstants.EMPTY_STORE,
    });
  },
};
