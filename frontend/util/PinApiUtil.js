/* eslint-env jquery */

// TODO: add error callbacks

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
};
