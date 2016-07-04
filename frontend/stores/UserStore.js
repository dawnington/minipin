const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const UserConstants = require('../constants/UserConstants');

let _users = {};
let _profile = {};

const UserStore = new Store(Dispatcher);

function resetUsers(users) {
  _users = users;
  UserStore.__emitChange();
}

function addUser(user) {
  _users[user.id] = user;
  UserStore.__emitChange();
}

function resetProfile(user) {
  _profile = user;
  UserStore.__emitChange();
}

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.PROFILE_RECEIVED:
      resetProfile(payload.user);
      break;
    case UserConstants.USER_RECEIVED:
      addUser(payload.user);
      break;
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      break;
    default:
      break;
  }
};

UserStore.all = function () {
  return Object.keys(_users).map(id => _users[id]);
};

UserStore.find = function (id) {
  return _users[id];
};

UserStore.profile = function () {
  return _profile;
};

module.exports = UserStore;
