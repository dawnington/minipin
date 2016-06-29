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
  createPin(pin) {
    PinApiUtil.createPin(pin, this.receiveSinglePin, ErrorActions.setErrors);
  },
  receiveAllPins(pins) {
    console.log(pins);
    Dispatcher.dispatch({
      actionType: PinConstants.PINS_RECEIVED,
      pins,
    });
  },
  receiveSinglePin(pin) {
    console.log(pin);
    Dispatcher.dispatch({
      actionType: PinConstants.PIN_RECEIVED,
      pin,
    });
  },
};
