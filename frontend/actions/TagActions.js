const Dispatcher = require('../dispatcher/Dispatcher');
const TagApiUtil = require('../util/TagApiUtil');
const TagConstants = require('../constants/TagConstants');

module.exports = {
  fetchTags(id) {
    TagApiUtil.fetchTags(id, this.receiveTags);
  },
  receiveTags(tags) {
    Dispatcher.dispatch({
      actionType: TagConstants.TAGS_RECEIVED,
      tags,
    });
  },
};
