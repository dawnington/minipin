const React = require('react');
// const SessionActions = require('../actions/SessionActions');
// const SessionStore = require('../stores/SessionStore');

const App = React.createClass({
  render() {
    return (
      <div>
        <header></header>
        {this.props.children}
      </div>
    );
  },
});

module.exports = App;
