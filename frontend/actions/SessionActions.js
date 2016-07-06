const Dispatcher = require('../dispatcher/Dispatcher');
const ErrorActions = require('./ErrorActions');
const SessionApiUtil = require('../util/SessionApiUtil');
const SessionConstants = require('../constants/SessionConstants');

module.exports = {
  receiveCurrentUser(user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user,
    });
  },
  receiveLogout() {
    setTimeout(() => {
      Dispatcher.dispatch({
        actionType: SessionConstants.LOGOUT,
      });
    }, 0);
  },
  signup(user) {
    SessionApiUtil.signup(user, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  login(user) {
    SessionApiUtil.login(user, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  logout() {
    SessionApiUtil.logout(this.receiveLogout, this.logErrors);
  },
  guestLogin() {
    const user = { username: 'janeDoe9000', password: 'joejoe' };
    SessionApiUtil.login(user, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  logErrors(resp) {
    console.log(resp);
  },
};
