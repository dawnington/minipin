const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const UserConstants = require('../constants/UserConstants');

let _profile = {};

const UserStore = new Store(Dispatcher);

function resetProfile(user) {
  _profile = user;
  UserStore.__emitChange();
}

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.PROFILE_RECEIVED:
      resetProfile(payload.user);
      break;
    default:
      break;
  }
};

UserStore.profile = function () {
  return _profile;
};

module.exports = UserStore;
