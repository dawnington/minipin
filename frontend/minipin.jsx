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
const Feed = require('./components/user/Feed');
const FollowIndex = require('./components/user/FollowIndex');
const PinIndex = require('./components/pin/PinIndex');
const LoginForm = require('./components/LoginForm');
const Profile = require('./components/user/Profile');
const SearchIndex = require('./components/search/SearchIndex');
const SignupForm = require('./components/SignupForm');

// Testing
const PinApiUtil = require('./util/PinApiUtil');
const PinActions = require('./actions/PinActions');
const PinStore = require('./stores/PinStore');
window.PinApiUtil = PinApiUtil;
window.PinActions = PinActions;
window.PinStore = PinStore;

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
      <IndexRoute component={Feed} />
      <Route path="boards/:boardId" component={Board} />
      <Route path="users/:userId" component={Profile}>
        <IndexRoute component={BoardIndex} />
        <Route path="pins" component={PinIndex} />
        <Route path="followers" component={FollowIndex} />
        <Route path="following" component={FollowIndex} />
      </Route>
      <Route path="search" component={SearchIndex} />
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
