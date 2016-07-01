const BoardActions = require('../../actions/BoardActions');
const ErrorStore = require('../../stores/ErrorStore');
const hashHistory = require('react-router').hashHistory;
const React = require('react');
const SessionActions = require('../../actions/SessionActions');

const BoardForm = React.createClass({
  getInitialState() {
    let state = { user_id: 0, name: '', description: '' }
    if (this.props.hasOwnProperty('board')) {
      const board = this.props.board;
      state = { user_id: board.owner.id, name: board.name, description: board.description };
      this.status = 'editing';
    } else {
      state.user_id = this.props.userId;
      this.status = 'creating';
    }
    return state;
  },
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },
  onNameChange(e) {
    this.setState({ name: e.target.value });
  },
  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  },
  fieldErrors(field) {
    const errors = ErrorStore.formErrors('board');
    if (!errors[field]) { return; }

    const messages = errors[field].map((errorMsg, i) =>
      <li className="form-error" key={i}>{field} {errorMsg}</li>
    );

    return <ul>{messages}</ul>;
  },
  handleSubmit(e) {
    e.preventDefault();
    if (this.status === 'editing') {
      const board = { name: this.state.name, description: this.state.description };
      BoardActions.updateBoard(this.props.board.id, board);
    } else {
      BoardActions.createBoard(this.state);
    }
    this.props.modalCallback();
  },
  handleCancel() {
    this.props.modalCallback();
  },
  deleteBoard() {
    const deleteBoard = confirm('Delete board?');
    if (deleteBoard) {
      BoardActions.deleteBoard(this.props.board.id);
      this.props.modalCallback();
      hashHistory.push("/");
    }
  },
  deleteButtonText() {
    if (this.status === 'editing') {
      return <i className="fa fa-trash-o form-icon" onClick={this.deleteBoard}></i>;
    }
    return <i className="fa fa-times form-icon" onClick={this.handleCancel}></i>;
  },
  render() {
    const header = (this.status === 'editing' ? 'Edit Board' : 'Create a New Board');
    const buttonText = (this.status === 'editing' ? 'Update Board' : 'Create Board')
    return (
      <div className="board-form">
        <h2>{header}</h2>
        <form className="board-form" onSubmit={this.handleSubmit}>
          {this.fieldErrors('name')}
          <input
            type="text"
            id="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.onNameChange}
            className="board-input"
          />
          <textarea
            id="description"
            cols="30"
            rows="5"
            value={this.state.description}
            placeholder="Description"
            onChange={this.onDescriptionChange}
            className="board-input"
          ></textarea>
        <button className="board-form-button">{buttonText}</button>
        {this.deleteButtonText()}
        </form>
      </div>
    );
  },
});

module.exports = BoardForm;
