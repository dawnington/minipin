/* eslint-env jquery */

module.exports = {
  fetchAllPins(successCb) {
    $.ajax({
      url: 'api/pins',
      success: successCb,
    });
  },
  fetchSinglePin(id, successCb) {
    $.ajax({
      url: `api/pins/${id}`,
      success: successCb,
    });
  },
  createPin(pin, successCb, errorCb) {
    $.ajax({
      method: 'POST',
      url: 'api/pins',
      data: { pin },
      success: successCb,
      error: errorCb,
    });
  },
  createPinning(pinning, successCb) {
    $.ajax({
      method: 'POST',
      url: 'api/pinnings',
      data: { pinning },
      success: successCb,
    });
  },
  fetchUserPins(id, successCb) {
    $.ajax({
      url: `api/users/${id}`,
      success: successCb,
    });
  },
};
