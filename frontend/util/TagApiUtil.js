/* eslint-env jquery */

module.exports = {
  fetchTags(id, success) {
    $.ajax({
      url: 'api/tags',
      data: { pin_id: id },
      success,
    });
  },
};
