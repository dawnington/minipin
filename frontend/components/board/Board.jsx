const BoardActions = require('../../actions/BoardActions');
const BoardForm = require('./BoardForm');
const BoardStore = require('../../stores/BoardStore');
const hashHistory = require('react-router').hashHistory;
const PinIndex = require('../pin/PinIndex');
const Modal = require('react-bootstrap').Modal;
const PinActions = require('../../actions/PinActions');
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
    PinActions.fetchPins({ board_id: this.boardId });
  },
  componentWillReceiveProps(newProps) {
    this.boardId = newProps.params.boardId;
    BoardActions.fetchSingleBoard(this.boardId);
    PinActions.fetchPins({ board_id: this.boardId });
  },
  componentWillUnmount() {
    this.boardListener.remove();
  },
  onChange() {
    const board = BoardStore.find(this.boardId);
    this.setState({ board });
  },
  goToOwner() {
    const profilePath = `users/${this.state.board.owner.id}`;
    hashHistory.push(profilePath);
  },
  showBoardForm() {
    this.setState({ modalShown: true });
  },
  closeBoardForm() {
    this.setState({ modalShown: false });
  },
  ownerButton() {
    if (SessionStore.currentUser().id === this.state.board.owner.id) {
      return <i className="fa fa-cog hover-item" onClick={this.showBoardForm}></i>;
    }
    return <h3 className="board-owner hover-item" onClick={this.goToOwner}>by {this.state.board.owner.name}</h3>;
  },
  privateBoard() {
    if (this.state.board.private) {
      return <i className="fa fa-lock"></i>;
    }
    return <div></div>;
  },
  render() {
    const board = this.state.board;
    return (
      <div className="main">
        <hgroup className="header">
          <div className="header-title">
            <h3 className="header-name">{board.name}</h3>
            <h5 className="board-description">{board.description}&nbsp;{this.privateBoard()}</h5>
          </div>
          {this.ownerButton()}
        </hgroup>
        <PinIndex boardId={this.boardId} />
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
