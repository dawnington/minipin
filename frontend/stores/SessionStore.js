const BoardConstants = require('../constants/BoardConstants');
const Dispatcher = require('../dispatcher/Dispatcher');
const FollowConstants = require('../constants/FollowConstants');
const hashHistory = require('react-router').hashHistory;
const SessionConstants = require('../constants/SessionConstants');
const Store = require('flux/utils').Store;

let _currentUser = {};
let _loggedIn = false;

const SessionStore = new Store(Dispatcher);

function login(user) {
  _currentUser = user;
  _loggedIn = true;
  SessionStore.__emitChange();
}

function logout() {
  _currentUser = {};
  _loggedIn = false;
  setTimeout(() => {
    hashHistory.push("login");
  }, 0);
}

function addBoard(board) {
  _currentUser.boards.push(board);
  SessionStore.__emitChange();
}

function removeBoard(board) {
  const idx = _currentUser.boards.findIndex(x => x.id === board.id);
  _currentUser.boards.splice(idx, 1);
  SessionStore.__emitChange();
}

function addFollow(follow) {
  _currentUser.follows[follow.user_id] = follow;
  SessionStore.__emitChange();
}

function removeFollow(follow) {
  delete _currentUser.follows[follow.user_id];
  SessionStore.__emitChange();
}

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      logout();
      break;
    case BoardConstants.NEW_BOARD:
      addBoard(payload.board);
      break;
    case BoardConstants.BOARD_REMOVED:
      removeBoard(payload.board);
      break;
    case FollowConstants.NEW_FOLLOW:
      addFollow(payload.follow);
      break;
    case FollowConstants.FOLLOW_REMOVED:
      removeFollow(payload.follow);
      break;
    default:
      break;
  }
};

SessionStore.currentUser = function () {
  const copy = {};
  return Object.assign(copy, _currentUser);
};

SessionStore.loggedIn = function () {
  return _loggedIn;
};

module.exports = SessionStore;
