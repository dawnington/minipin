// React
const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Auth
const SessionActions = require('./actions/SessionActions');
const SessionStore = require('./stores/SessionStore');
window.SessionActions = SessionActions;
window.SessionStore = SessionStore;
// Components
const App = require('./components/App');
const Board = require('./components/board/Board');
const LoginForm = require('./components/LoginForm');
const SignupForm = require('./components/SignupForm');
const UserPinPage = require('./components/user/UserPinPage');

// Testing
const BoardStore = require('./stores/BoardStore');
const PinActions = require('./actions/PinActions');
const PinStore = require('./stores/PinStore');
const FollowApiUtil = require('./util/FollowApiUtil');
window.FollowApiUtil = FollowApiUtil;
window.PinActions = PinActions;
window.PinStore = PinStore;
window.BoardStore = BoardStore;

function ensureLoggedIn(nextState, replace) {
  if (!SessionStore.loggedIn()) {
    replace('login');
  }
}

function ensureLoggedOut(nextState, replace) {
  if (SessionStore.loggedIn()) {
    replace('/');
  }
}

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} onEnter={ensureLoggedIn}>
      <Route path="boards" component={Board} />
      <Route path="boards/:boardId" component={Board} />
      <Route path="users/:userId/pins" component={UserPinPage} />
    </Route>
    <Route path="login" component={LoginForm} onEnter={ensureLoggedOut} />
    <Route path="signup" component={SignupForm} onEnter={ensureLoggedOut} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(routes, document.getElementById('root'));
});
