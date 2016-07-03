const BoardActions = require('../../actions/BoardActions');
const BoardForm = require('./BoardForm');
const BoardStore = require('../../stores/BoardStore');
const Modal = require('react-bootstrap').Modal;
const PinIndex = require('../pin/PinIndex');
const React = require('react');
const SessionStore = require('../../stores/SessionStore');

const Board = React.createClass({
  getInitialState() {
    this.boardId = this.props.params.boardId;
    const board = BoardStore.find(this.boardId) || { owner: {} };
    return { board, modalShown: false };
  },
  componentDidMount() {
    this.boardListener = BoardStore.addListener(this.onChange);
    BoardActions.fetchSingleBoard(this.boardId);
  },
  componentWillReceiveProps(newProps) {
    this.boardId = newProps.params.boardId;
    BoardActions.fetchSingleBoard(this.boardId);
  },
  componentWillUnmount() {
    this.boardListener.remove();
  },
  onChange() {
    const board = BoardStore.find(this.boardId);
    this.setState({ board });
  },
  showBoardForm() {
    this.setState({ modalShown: true });
  },
  closeBoardForm() {
    this.setState({ modalShown: false });
  },
  ownerButton() {
    if (SessionStore.currentUser().id === this.state.board.owner.id) {
      return <i className="fa fa-cog" onClick={this.showBoardForm}></i>;
    }
    return <h3 className="board-owner">by {this.state.board.owner.name}</h3>;
  },
  render() {
    const board = this.state.board;
    return (
      <div className="main">
        <hgroup className="header">
          <div className="header-title">
            <h3 className="board-name">{board.name}</h3>
            <h5 className="board-description">{board.description}</h5>
          </div>
          {this.ownerButton()}
        </hgroup>
        <PinIndex boardId={board.id} />
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
