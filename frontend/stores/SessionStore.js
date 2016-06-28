const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/SessionConstants');
const hashHistory = require('react-router').hashHistory;

let _currentUser = {};
let _loggedIn = false;

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
  _loggedIn = true;
  this.__emitChange();
};

SessionStore.logout = function () {
  _currentUser = {};
  _loggedIn = false;
  this.__emitChange();
};

SessionStore.currentUser = function () {
  const copy = {};
  return Object.assign(copy, _currentUser);
};

SessionStore.loggedIn = function () {
  return _loggedIn;
};

module.exports = SessionStore;
