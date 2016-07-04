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
    FollowApiUtil.createFollow(follow, this.printSomething, this.printSomething);
  },
  deleteFollow(id) {
    FollowApiUtil.deleteFollow(id, this.printSomething, this.printSomething);
  },
  receiveFollows(follows) {
    Dispatcher.dispatch({
      actionType: FollowConstants.FOLLOWS_RECEIVED,
      follows,
    });
  },
  printSomething(thing) {
    console.log(thing);
  },
};
