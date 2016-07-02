/* eslint-env jquery */

module.exports = {
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
};
