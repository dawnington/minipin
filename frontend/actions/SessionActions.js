const Dispatcher = require('../dispatcher/Dispatcher');
const SessionApiUtil = require('../util/SessionApiUtil');
const SessionConstants = require('../constants/SessionConstants');

module.exports = {
  receiveCurrentUser(user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user,
    });
  },
  dispatchLogout() {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  },
  signup(user) {
    SessionApiUtil.signup(user, this.receiveCurrentUser);
  },
  login(user, callback) {
    SessionApiUtil.login(user, this.receiveCurrentUser);
    callback();
  },
  logout() {
    SessionApiUtil.logout(this.dispatchLogout);
  },
};
