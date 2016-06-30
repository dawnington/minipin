const Dispatcher = require('../dispatcher/Dispatcher');
const ErrorActions = require('./ErrorActions');
const BoardApiUtil = require('../util/BoardApiUtil');
const BoardConstants = require('../constants/BoardConstants');

module.exports = {
  fetchAllBoards(userId) {
    BoardApiUtil.fetchAllBoards(userId, this.receiveAllBoards);
  },
  fetchSingleBoard(id) {
    BoardApiUtil.fetchSingleBoard(id, this.receiveSingleBoard);
  },
  createBoard(board) {
    BoardApiUtil.createBoard(board, this.receiveSingleBoard, ErrorActions.setErrors);
  },
  updateBoard(id, board) {
    BoardApiUtil.updateBoard(id, board, this.receiveSingleBoard, ErrorActions.setErrors);
  },
  deleteBoard(id) {
    BoardApiUtil.deleteBoard(id, this.boardRemoved);
  },
  receiveAllBoards(boards) {
    Dispatcher.dispatch({
      actionType: BoardConstants.BOARDS_RECEIVED,
      boards,
    });
  },
  receiveSingleBoard(board) {
    Dispatcher.dispatch({
      actionType: BoardConstants.BOARD_RECEIVED,
      board,
    });
  },
  boardRemoved(board) {
    Dispatcher.dispatch({
      actionType: BoardConstants.BOARD_REMOVED,
      board,
    });
  },
};
