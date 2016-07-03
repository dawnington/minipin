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
const BoardIndex = require('./components/board/BoardIndex');
const LoginForm = require('./components/LoginForm');
const PinIndex = require('./components/pin/PinIndex');
const Profile = require('./components/user/Profile');
const SignupForm = require('./components/SignupForm');
// const UserPinPage = require('./components/user/UserPinPage');

// Testing
const UserActions = require('./actions/UserActions');
const UserStore = require('./stores/UserStore');
window.UserActions = UserActions;
window.UserStore = UserStore;

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
      <Route path="boards/:boardId" component={Board} />
      <Route path="users/:userId" component={Profile}>
        <IndexRoute component={BoardIndex} />
        <Route path="pins" component={PinIndex} />
      </Route>
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
