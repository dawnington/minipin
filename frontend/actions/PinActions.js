const Dispatcher = require('../dispatcher/Dispatcher');
const ErrorActions = require('./ErrorActions');
const PinApiUtil = require('../util/PinApiUtil');
const PinConstants = require('../constants/PinConstants');

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
  createPin(pin) {
    PinApiUtil.createPin(pin, this.receiveSinglePin, ErrorActions.setErrors);
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
};
