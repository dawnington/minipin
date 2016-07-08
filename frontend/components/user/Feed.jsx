const PinIndex = require('../pin/PinIndex');
const PinActions = require('../../actions/PinActions');
const React = require('react');

const Feed = React.createClass({
  componentDidMount() {
    PinActions.fetchFeed(this.props.userId);
  },
  componentWillReceiveProps(newProps) {
    PinActions.fetchFeed(newProps.userId);
  },
  render() {
    return (
      <div className="main">
        <hgroup className="header">
          <div className="header-title">
            <h3 className="header-name">Feed</h3>
            <h5 className="board-description">Pins from those you follow</h5>
          </div>
        </hgroup>
        <PinIndex />
      </div>
    );
  },
});

module.exports = Feed;
