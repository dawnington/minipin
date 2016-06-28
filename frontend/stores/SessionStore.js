const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/SessionConstants');

let _currentUser = {};

const SessionStore = new Store(Dispatcher);

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      this.login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      this.logout();
      break;
    default:
      break;
  }
};

SessionStore.login = function (user) {
  _currentUser = user;
  this.__emitChange();
};

SessionStore.logout = function () {
  _currentUser = {};
  this.__emitChange();
};

SessionStore.currentUser = function () {
  const copy = {};
  return Object.assign(copy, _currentUser);
};

SessionStore.isUserLoggedIn = function () {
  return _currentUser.hasOwnProperty('id');
};

module.exports = SessionStore;
