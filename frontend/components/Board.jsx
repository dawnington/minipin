const React = require('react');
const BoardStore = require('../stores/BoardStore');
const BoardActions = require('../actions/BoardActions');
const PinIndex = require('./PinIndex');

const Board = React.createClass({
  getInitialState() {
    this.boardId = parseInt(this.props.params.boardId);
    const board = BoardStore.find(this.boardId) || { name: '', owner: { name: '' }, pins: [] };
    return { board };
  },
  componentDidMount() {
    this.boardListener = BoardStore.addListener(this.onChange);
    BoardActions.fetchSingleBoard(this.boardId);
  },
  componentWillReceiveProps(newProps) {
    this.boardId = parseInt(newProps.params.boardId);
    BoardActions.fetchSingleBoard(this.boardId);
  },
  componentWillUnmount() {
    this.boardListener.remove();
  },
  onChange() {
    const board = BoardStore.find(this.boardId);
    this.setState({ board });
  },
  render() {
    return (
      <div className="board">
        <hgroup>
          <h3>{this.state.board.name}</h3>
          <h3>{this.state.board.owner.name}</h3>
        </hgroup>
        <PinIndex pins={this.state.board.pins} />
      </div>
    );
  },
});

module.exports = Board;
