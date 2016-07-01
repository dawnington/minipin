const Dispatcher = require('../dispatcher/Dispatcher');
const ErrorActions = require('./ErrorActions');
const PinApiUtil = require('../util/PinApiUtil');
const PinConstants = require('../constants/PinConstants');

// TODO: replace printSomething

module.exports = {
  fetchAllPins() {
    PinApiUtil.fetchAllPins(this.receiveAllPins);
  },
  fetchSinglePin(id) {
    PinApiUtil.fetchSinglePin(id, this.receiveSinglePin);
  },
  fetchUserPins(id) {
    PinApiUtil.fetchUserPins(id, this.receiveUserPins);
  },
  fetchBoardPins(id) {
    PinApiUtil.fetchBoardPins(id, this.receiveBoardPins);
  },
  createPin(pin) {
    PinApiUtil.createPin(pin, this.receiveSinglePin, ErrorActions.setErrors);
  },
  addPin(pinning) {
    PinApiUtil.createPinning(pinning, this.receiveSinglePin);
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
  receiveUserPins(user) {
    Dispatcher.dispatch({
      actionType: PinConstants.PINS_RECEIVED,
      pins: user.pins,
    });
  },
  receiveBoardPins(board) {
    Dispatcher.dispatch({
      actionType: PinConstants.PINS_RECEIVED,
      pins: board.pins,
    });
  },
  removePinning(pinning) {
    Dispatcher.dispatch({
      actionType: PinConstants.PINNING_REMOVED,
      pinning,
    });
  },
};
