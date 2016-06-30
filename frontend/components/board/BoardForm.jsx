const BoardActions = require('../../actions/BoardActions');
const ErrorStore = require('../../stores/ErrorStore');
const React = require('react');

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
      <li key={i}>{field} {errorMsg}</li>
    );

    return <ul className="form-errors">{messages}</ul>;
  },
  handleSubmit(e) {
    e.preventDefault();
    if (this.status === 'editing') {
      const board = { name: this.state.name, description: this.state.description };
      BoardActions.updateBoard(this.props.board.id, board);
    } else {
      BoardActions.createBoard(this.state);
    }
  },
  render() {
    const header = (this.status === 'editing' ? 'Edit Board' : 'Create a New Board');
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
          />
          <textarea
            id="description"
            cols="30"
            rows="5"
            value={this.state.description}
            placeholder="Description"
            onChange={this.onDescriptionChange}
          ></textarea>
          <button>Create Board</button>
        </form>
      </div>
    );
  },
});

module.exports = BoardForm;
