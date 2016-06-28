/* eslint-env jquery */

module.exports = {
  signup(user, successCb, errorCb) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: { user },
      success: successCb,
      error: errorCb,
    });
  },
  login(user, successCb, errorCb) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: { user },
      success: successCb,
      error: errorCb,
    });
  },
  logout(successCb, errorCb) {
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      success: successCb,
      error: errorCb,
    });
  },
};
