const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/SessionConstants');
const hashHistory = require('react-router').hashHistory;

let _currentUser = {};
let _loggedIn = false;

const SessionStore = new Store(Dispatcher);

function login(user) {
  _currentUser = user;
  _loggedIn = true;
  SessionStore.__emitChange();
}

function logout() {
  _currentUser = {};
  _loggedIn = false;
  hashHistory.push("login");
  SessionStore.__emitChange();
}

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      logout();
      break;
    default:
      break;
  }
};


SessionStore.currentUser = function () {
  const copy = {};
  return Object.assign(copy, _currentUser);
};

SessionStore.loggedIn = function () {
  return _loggedIn;
};

module.exports = SessionStore;
