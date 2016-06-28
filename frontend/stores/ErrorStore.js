const Dispatcher = require('../dispatcher/Dispatcher');
const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/ErrorConstants');

let _errors = {};
let _form = '';

const ErrorStore = new Store(Dispatcher);

function clearErrors() {
  _errors = {};
  _form = '';
  ErrorStore.__emitChange();
}

function setErrors(payload) {
  _errors = payload.errors;
  _form = payload.form;
  ErrorStore.__emitChange();
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
    default:
      break;
  }
};

ErrorStore.formErrors = function (form) {
  if (_form === form) {
    return ErrorStore.all();
  }
  return {};
};

ErrorStore.all = function () {
  const result = {};
  Object.assign(result, _errors);
  return result;
};

ErrorStore.form = function () {
  return _form;
};

module.exports = ErrorStore;
