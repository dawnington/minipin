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
  createFollow(follow, success, error) {
    $.ajax({
      method: 'POST',
      url: 'api/follows',
      success,
      error,
    });
  },
  deleteFollow(id, success, error) {
    $.ajax({
      method: 'DELETE',
      url: `api/follows/${id}`,
      success,
      error,
    });
  },
};
