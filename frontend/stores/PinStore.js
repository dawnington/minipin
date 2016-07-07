const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const PinConstants = require('../constants/PinConstants');

let _pins = {};
let _newPin = {};

const PinStore = new Store(Dispatcher);

function resetPins(pins) {
  _pins = pins;
  PinStore.__emitChange();
}

function updatePin(pin) {
  _pins[pin.pinning_id] = pin;
  PinStore.__emitChange();
}

function addNewPin(pin) {
  _newPin = pin;
  PinStore.__emitChange();
}

function removePin(pin) {
  delete _pins[pin.pinning_id];
  PinStore.__emitChange();
}

function emptyStore() {
  _pins = {};
}

PinStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PinConstants.PINS_RECEIVED:
      resetPins(payload.pins);
      break;
    case PinConstants.PIN_RECEIVED:
      updatePin(payload.pin);
      break;
    case PinConstants.NEW_PIN_RECEIVED:
      addNewPin(payload.pin);
      break;
    case PinConstants.PINNING_REMOVED:
      removePin(payload.pinning);
      break;
    case PinConstants.EMPTY_STORE:
      emptyStore();
      break;
    default:
      break;
  }
};

PinStore.all = function () {
  const pins = Object.keys(_pins).map(id =>
    _pins[id]
  );
  return pins.sort((x, y) => y.pinning_id - x.pinning_id);
};

PinStore.newPin = function () {
  return _newPin;
};

PinStore.find = function (id) {
  return _pins[id];
};

module.exports = PinStore;
