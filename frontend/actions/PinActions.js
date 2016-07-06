const Dispatcher = require('../dispatcher/Dispatcher');
const ErrorActions = require('./ErrorActions');
const PinApiUtil = require('../util/PinApiUtil');
const PinConstants = require('../constants/PinConstants');

// TODO: replace printSomething

module.exports = {
  fetchAllPins() {
    PinApiUtil.fetchAllPins(this.receiveAllPins);
  },
  fetchFeed(id) {
    PinApiUtil.fetchFeed(id, this.receiveAllPins);
  },
  fetchUserPins(id) {
    PinApiUtil.fetchUserPins(id, this.receiveAllPins);
  },
  fetchBoardPins(id) {
    PinApiUtil.fetchBoardPins(id, this.receiveAllPins);
  },
  createPin(pin) {
    PinApiUtil.createPin(pin, this.receiveNewPin, ErrorActions.setErrors);
  },
  addPin(pinning) {
    PinApiUtil.createPinning(pinning);
  },
  deletePinning(id) {
    PinApiUtil.deletePinning(id, this.removePinning);
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
  receiveNewPin(pin) {
    Dispatcher.dispatch({
      actionType: PinConstants.NEW_PIN_RECEIVED,
      pin,
    });
  },
  removePinning(pinning) {
    Dispatcher.dispatch({
      actionType: PinConstants.PINNING_REMOVED,
      pinning,
    });
  },
  emptyStore() {
    Dispatcher.dispatch({
      actionType: PinConstants.EMPTY_STORE,
    });
  },
};
