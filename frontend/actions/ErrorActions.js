const ErrorConstants = require('../constants/ErrorConstants');
const Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  setErrors(form, errors) {
    Dispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      errors,
      form,
    });
  },
  clearErrors() {
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    });
  },
};
