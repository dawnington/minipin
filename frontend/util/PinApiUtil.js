/* eslint-env jquery */

module.exports = {
  fetchFeed(id, success) {
    $.ajax({
      url: `api/users/${id}/feed`,
      success,
    });
  },
  createPhoto(photo, successCb, errorCb) {
    $.ajax({
      method: 'POST',
      url: 'api/photos',
      data: { photo },
      success: successCb,
      error: errorCb,
    });
  },
  createPin(pin, success, error) {
    $.ajax({
      method: 'POST',
      url: 'api/pins',
      data: { pin },
      success,
      error,
    });
  },
  deletePin(id, success) {
    $.ajax({
      method: 'DELETE',
      url: `api/pins/${id}`,
      success,
    });
  },
  fetchUserPins(id, success) {
    $.ajax({
      url: `api/users/${id}/pins`,
      success,
    });
  },
  fetchBoardPins(id, success) {
    $.ajax({
      url: `api/boards/${id}/pins`,
      success,
    });
  },
};
