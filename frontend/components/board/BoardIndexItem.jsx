const React = require('react');

const BoardIndexItem = React.createClass({
  render() {
    const board = this.props.board;
    return (
      <div className="card-index-item">
        <div className="board-index-item">
          {board.name}
        </div>
      </div>
    );
  },
});

module.exports = BoardIndexItem;
