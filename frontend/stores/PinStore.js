const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const PinConstants = require('../constants/PinConstants');

let _pins = {};

const PinStore = new Store(Dispatcher);

function resetPins(pins) {
  _pins = pins;
  PinStore.__emitChange();
}

function updatePin(pin) {
  _pins[pin.pinning_id] = pin;
  PinStore.__emitChange();
}

function removePin(pin) {
  delete _pins[pin.pinning_id];
  PinStore.__emitChange();
}

PinStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PinConstants.PINS_RECEIVED:
      resetPins(payload.pins);
      break;
    case PinConstants.PIN_RECEIVED:
      updatePin(payload.pin);
      break;
    case PinConstants.PINNING_REMOVED:
      removePin(payload.pinning);
      break;
    default:
      break;
  }
};

PinStore.all = function () {
  return Object.keys(_pins).map(id =>
    _pins[id]
  );
};

PinStore.find = function (id) {
  return _pins[id];
};

module.exports = PinStore;
