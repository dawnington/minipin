const Dispatcher = require('../dispatcher/Dispatcher');
const UserApiUtil = require('../util/UserApiUtil');
const UserConstants = require('../constants/UserConstants');

module.exports = {
  fetchUserProfile(id) {
    UserApiUtil.fetchUser(id, this.receiveProfile);
  },
  receiveUser(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user,
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
