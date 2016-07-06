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
    BoardApiUtil.createBoard(board, this.addBoardToUser, this.printThings);
  },
  updateBoard(id, board) {
    BoardApiUtil.updateBoard(id, board, this.receiveSingleBoard, ErrorActions.setErrors);
  },
  deleteBoard(id) {
    BoardApiUtil.deleteBoard(id, this.boardRemoved);
  },
  emptyStore() {
    Dispatcher.dispatch({
      actionType: BoardConstants.EMPTY_STORE,
    });
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
  addBoardToUser(board) {
    Dispatcher.dispatch({
      actionType: BoardConstants.NEW_BOARD,
      board,
    });
  },
  printThings(thing, thing2) {
    console.log(thing);
    console.log(thing2);
  },
};
