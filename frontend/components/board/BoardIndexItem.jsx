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
      <div className="board-index-item" onClick={this.redirectToBoard}>
        <h3>{board.name}</h3>
        <h5>{board.description}</h5>
      </div>
    );
  },
});

module.exports = BoardIndexItem;
