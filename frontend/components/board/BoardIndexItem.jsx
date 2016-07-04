const hashHistory = require('react-router').hashHistory;
const React = require('react');

const BoardIndexItem = React.createClass({
  redirectToBoard() {
    const boardPath = `boards/${this.props.board.id}`;
    hashHistory.push(boardPath);
  },
  render() {
    const board = this.props.board;
    return (
      <div className="card-index-item" onClick={this.redirectToBoard}>
        <div className="board-index-item">
          {board.name}
          {board.description}
        </div>
      </div>
    );
  },
});

module.exports = BoardIndexItem;
