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
const LoginForm = require('./components/LoginForm');
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

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} onEnter={ensureLoggedIn} />
    <Route path="login" component={LoginForm} />
    <Route path="signup" component={SignupForm} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(routes, document.getElementById('root'));
});
