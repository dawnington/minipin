const Dispatcher = require('../dispatcher/Dispatcher');
const ErrorActions = require('./ErrorActions');
const PinApiUtil = require('../util/PinApiUtil');
const PinConstants = require('../constants/PinConstants');

module.exports = {
  fetchFeed(id) {
    PinApiUtil.fetchFeed(id, this.receiveAllPins);
  },
  fetchPins(data) {
    PinApiUtil.fetchPins(data, this.receiveAllPins);
  },
  createPhoto(photo) {
    PinApiUtil.createPhoto(photo, this.receiveNewPhoto, ErrorActions.setErrors);
  },
  addPin(pin) {
    PinApiUtil.createPin(pin);
  },
  deletePin(id) {
    PinApiUtil.deletePin(id, this.removePin);
  },
  receiveAllPins(pins) {
    Dispatcher.dispatch({
      actionType: PinConstants.PINS_RECEIVED,
      pins,
    });
  },
  receiveSinglePin(pin) {
    Dispatcher.dispatch({
      actionType: PinConstants.PIN_RECEIVED,
      pin,
    });
  },
  receiveNewPhoto(photo) {
    Dispatcher.dispatch({
      actionType: PinConstants.NEW_PHOTO_RECEIVED,
      photo,
    });
  },
  removePin(pin) {
    Dispatcher.dispatch({
      actionType: PinConstants.PIN_REMOVED,
      pin,
    });
  },
  emptyStore() {
    Dispatcher.dispatch({
      actionType: PinConstants.EMPTY_STORE,
    });
  },
};
