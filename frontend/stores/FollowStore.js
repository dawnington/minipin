const Dispatcher = require('../dispatcher/Dispatcher');
const FollowConstants = require('../constants/FollowConstants');
const Store = require('flux/utils').Store;

let _follows = {};

const FollowStore = new Store(Dispatcher);

function resetFollows(follows) {
  _follows = follows;
  FollowStore.__emitChange();
}

FollowStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FollowConstants.FOLLOWS_RECEIVED:
      resetFollows(payload.follows);
      break;
    default:
      break;
  }
};

FollowStore.all = function () {
  return Object.keys(_follows).map(id => _follows[id]);
};

module.exports = FollowStore;
