// React
const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Auth
const SessionActions = require('./actions/SessionActions');
const SessionStore = require('./stores/SessionStore');
window.SessionActions = SessionActions;
// Components
const App = require('./components/App');
const LoginForm = require('./components/LoginForm');
const SignupForm = require('./components/SignupForm');

function ensureLoggedIn(nextState, replace) {
  if (!SessionStore.loggedIn()) {
    replace('/login');
  }
}

const routes = (
  <Route path="/" component={App}>
    <Route path="login" component={LoginForm} />
    <Route path="signup" component={SignupForm} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('root'));
});
