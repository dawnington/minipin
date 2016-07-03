/* eslint-env jquery */

module.exports = {
  createFollow(follow, success, error) {
    $.ajax({
      method: 'POST',
      url: 'api/follows',
      success,
      error,
    });
  },
};
