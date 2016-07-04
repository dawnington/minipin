const BoardConstants = require('../constants/BoardConstants');
const Dispatcher = require('../dispatcher/Dispatcher');
const hashHistory = require('react-router').hashHistory;
const Store = require('flux/utils').Store;

let _boards = {};

const BoardStore = new Store(Dispatcher);

function resetBoards(boards) {
  _boards = boards;
  BoardStore.__emitChange();
}

function updateBoard(board) {
  _boards[board.id] = board;
  BoardStore.__emitChange();
}

function removeBoard(board) {
  delete _boards[board.id];
  BoardStore.__emitChange();
}

function emptyStore() {
  _boards = {};
}

BoardStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BoardConstants.BOARDS_RECEIVED:
      resetBoards(payload.boards);
      break;
    case BoardConstants.BOARD_RECEIVED:
      updateBoard(payload.board);
      break;
    case BoardConstants.BOARD_REMOVED:
      removeBoard(payload.board);
      break;
    case BoardConstants.EMPTY_STORE:
      emptyStore();
      break;
    default:
      break;
  }
};

BoardStore.all = function () {
  return Object.keys(_boards).map(id =>
    _boards[id]
  );
};

BoardStore.find = function (id) {
  return _boards[id];
};

module.exports = BoardStore;
