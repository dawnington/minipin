const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const PinConstants = require('../constants/PinConstants');

let _pins = {};
let _newPhoto = {};

const PinStore = new Store(Dispatcher);

function resetPins(pins) {
  _pins = pins;
  PinStore.__emitChange();
}

function updatePin(pin) {
  _pins[pin.id] = pin;
  PinStore.__emitChange();
}

function addNewPhoto(photo) {
  _newPhoto = photo;
  PinStore.__emitChange();
}

function removePin(pin) {
  delete _pins[pin.id];
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
    case PinConstants.NEW_PHOTO_RECEIVED:
      addNewPhoto(payload.photo);
      break;
    case PinConstants.PIN_REMOVED:
      removePin(payload.pin);
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
  return pins.sort((x, y) => y.id - x.id);
};

PinStore.newPhoto = function () {
  return _newPhoto;
};

PinStore.find = function (id) {
  return _pins[id];
};

module.exports = PinStore;
