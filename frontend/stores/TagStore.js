const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const TagConstants = require('../constants/TagConstants');

let _tags = [];

const TagStore = new Store(Dispatcher);

function _resetTags(tags) {
  _tags = [];
  tags.forEach(tag => { _tags.push(tag.name); });
  TagStore.__emitChange();
}

TagStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TagConstants.TAGS_RECEIVED:
      _resetTags(payload.tags);
      break;
    default:
      break;
  }
};

TagStore.all = function () {
  return _tags.slice();
};

module.exports = TagStore;
