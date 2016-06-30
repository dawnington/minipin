const React = require('react');
const BoardActions = require('../actions/BoardActions');
const ErrorStore = require('../stores/ErrorStore');

const BoardForm = React.createClass({
  getInitialState() {
    return { user_id: this.props.userId, name: '', description: '' };
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
      <li key={i}>{errorMsg}</li>
    );

    return <ul className="form-errors">{messages}</ul>;
  },
  createBoard(e) {
    e.preventDefault();
    BoardActions.createBoard(this.state);
  },
  render() {
    return (
      <div className="board-form">
        <h2>Create a New Board</h2>
        <form className="board-form" onSubmit={this.createBoard}>
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
