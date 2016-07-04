const FeedIndex = require('./FeedIndex');
const React = require('react');

const Feed = React.createClass({
  render() {
    return (
      <div className="main">
        <hgroup className="header">
          <div className="header-title">
            <h3 className="header-name">Feed</h3>
            <h5 className="board-description">Pins from those you follow</h5>
          </div>
        </hgroup>
        <FeedIndex userId={this.props.userId} />
      </div>
    )
  }
});

module.exports = Feed;
