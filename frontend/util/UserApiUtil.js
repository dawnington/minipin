/* eslint-env jquery */

module.exports = {
  fetchUser(id, success) {
    $.ajax({
      url: `api/users/${id}`,
      success,
    });
  },
};
