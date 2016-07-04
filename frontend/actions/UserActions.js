const Dispatcher = require('../dispatcher/Dispatcher');
const UserApiUtil = require('../util/UserApiUtil');
const UserConstants = require('../constants/UserConstants');

module.exports = {
  fetchUserProfile(id) {
    UserApiUtil.fetchUser(id, this.receiveProfile);
  },
  fetchFollowers(id) {
    UserApiUtil.fetchFollowers(id, this.receiveUsers);
  },
  fetchFollowees(id) {
    UserApiUtil.fetchFollowees(id, this.receiveUsers);
  },
  addFollow(follow) {
    UserApiUtil.createFollow(follow, this.printSomething, this.printSomething);
  },
  deleteFollow(id) {
    UserApiUtil.deleteFollow(id, this.printSomething, this.printSomething);
  },
  receiveUser(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user,
    });
  },
  receiveUsers(users) {
    Dispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users,
    });
  },
  receiveProfile(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.PROFILE_RECEIVED,
      user,
    });
  },
  printSomething(thing) {
    console.log(thing);
  },
};
