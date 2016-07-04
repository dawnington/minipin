const BoardActions = require('../../actions/BoardActions');
const BoardIndexItem = require('./BoardIndexItem');
const BoardStore = require('../../stores/BoardStore');
const React = require('react');

const BoardIndex = React.createClass({
  getInitialState() {
    return { boards: BoardStore.all() };
  },
  componentDidMount() {
    this.boardListener = BoardStore.addListener(this.onChange);
    BoardActions.fetchAllBoards(this.props.userId);
  },
  componentWillReceiveProps(newProps) {
    BoardActions.fetchAllBoards(newProps.userId);
  },
  componentWillUnmount() {
    this.boardListener.remove();
  },
  onChange() {
    this.setState({ boards: BoardStore.all() });
  },
  render() {
    return (
      <div className="card-index board-index">
        {
          this.state.boards.map(board =>
            <BoardIndexItem board={board} key={board.id} />
          )
        }
      </div>
    );
  },
});

module.exports = BoardIndex;
