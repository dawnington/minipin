const Dispatcher = require('../dispatcher/Dispatcher');
const UserApiUtil = require('../util/UserApiUtil');
const UserConstants = require('../constants/UserConstants');

module.exports = {
  fetchSingleUser(id) {
    UserApiUtil.fetchUser(id, this.receiveUser);
  },
  fetchFollowers(id) {
    UserApiUtil.fetchFollowers(id, this.receiveUsers);
  },
  fetchFollowees(id) {
    UserApiUtil.fetchFollowees(id, this.receiveUsers);
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
};
