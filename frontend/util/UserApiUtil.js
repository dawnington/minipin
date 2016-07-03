/* eslint-env jquery */

module.exports = {
  fetchUser(id, success) {
    $.ajax({
      url: `api/users/${id}`,
      success,
    });
  },
  fetchFollowers(id, success) {
    $.ajax({
      url: `api/users/${id}/followers`,
      success,
    });
  },
  fetchFollowees(id, success) {
    $.ajax({
      url: `api/users/${id}/following`,
      success,
    });
  },
};
