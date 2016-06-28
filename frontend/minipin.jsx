const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const LoginForm = require('./components/LoginForm');
const SignupForm = require('./components/SignupForm');

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome to MiniPin</h1>
        {this.props.children}
      </div>
    );
  },
});

const routes = (
  <Route path="/" component={App}>
    <Route path="login" component={LoginForm} />
    <Route path="signup" component={SignupForm} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('root'));
});

const SessionActions = require('./actions/SessionActions');

window.SessionActions = SessionActions;
