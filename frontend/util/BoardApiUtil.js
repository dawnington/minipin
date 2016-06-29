/* eslint-env jquery */

// TODO: add error callbacks

module.exports = {
  fetchAllBoards(userId, successCb) {
    $.ajax({
      url: `api/users/${userId}/boards`,
      success: successCb,
    });
  },
  fetchSingleBoard(id, successCb) {
    $.ajax({
      url: `api/boards/${id}`,
      success: successCb,
    });
  },
  createBoard(board, successCb, errorCb) {
    $.ajax({
      method: 'POST',
      url: 'api/boards',
      data: { board },
      success: successCb,
      error: errorCb,
    });
  },
  deleteBoard(id, successCb) {
    $.ajax({
      method: 'DELETE',
      url: `api/boards/${id}`,
      success: successCb,
    });
  },
};
