/* eslint-env jquery */

module.exports = {
  fetchAllPins(success) {
    $.ajax({
      url: 'api/pins',
      success,
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
  createPinning(pinning, success) {
    $.ajax({
      method: 'POST',
      url: 'api/pinnings',
      data: { pinning },
      success,
    });
  },
  deletePinning(id, success) {
    $.ajax({
      method: 'DELETE',
      url: `api/pinnings/${id}`,
      success,
    });
  },
  fetchUserPins(id, success) {
    $.ajax({
      url: `api/users/${id}/pinnings`,
      success,
    });
  },
  fetchBoardPins(id, success) {
    $.ajax({
      url: `api/boards/${id}/pinnings`,
      success,
    });
  },
};
