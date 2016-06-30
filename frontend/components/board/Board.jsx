const BoardActions = require('../../actions/BoardActions');
const BoardForm = require('./BoardForm');
const BoardStore = require('../../stores/BoardStore');
const Modal = require('react-bootstrap').Modal;
const PinIndex = require('../pin/PinIndex');
const React = require('react');
const SessionStore = require('../../stores/SessionStore');

const Board = React.createClass({
  getInitialState() {
    this.boardId = parseInt(this.props.params.boardId);
    const board = BoardStore.find(this.boardId) || { name: '', owner: { name: '' }, pins: [] };
    return { board, modalShown: false };
  },
  componentDidMount() {
    this.boardListener = BoardStore.addListener(this.onChange);
    BoardActions.fetchSingleBoard(this.boardId);
    this.checkForOwner();
  },
  componentWillReceiveProps(newProps) {
    this.boardId = parseInt(newProps.params.boardId);
    BoardActions.fetchSingleBoard(this.boardId);
    this.checkForOwner();
  },
  componentWillUnmount() {
    this.boardListener.remove();
  },
  checkForOwner() {
    if (SessionStore.currentUser().id === this.state.board.owner.id) {
      return true;
    }
    return false;
  },
  showBoardForm() {
    this.setState({ modalShown: true });
  },
  closeBoardForm() {
    this.setState({ modalShown: false });
  },
  onChange() {
    const board = BoardStore.find(this.boardId);
    this.setState({ board });
  },
  render() {
    const board = this.state.board;
    const owner = (this.checkForOwner() ? <i className="fa fa-cog" onClick={this.showBoardForm}></i> : <h3 className="board-owner">by {board.owner.name}</h3>);
    return (
      <div className="board">
        <hgroup className="board-header">
          <div className="board-heading">
            <div className="board-title">
              <h3 className="board-name">{board.name}</h3>
              <h5 className="board-description">{board.description}</h5>
            </div>
          </div>
          {owner}
        </hgroup>
        <PinIndex pins={board.pins} />
          <Modal show={this.state.modalShown} onHide={this.closeBoardForm} >
            <Modal.Body>
              <BoardForm board={board} modalCallback={this.closeBoardForm}/>
            </Modal.Body>
          </Modal>
      </div>
    );
  },
});

module.exports = Board;
