const PinActions = require('../../actions/PinActions');
const React = require('react');
const SessionStore = require('../../stores/SessionStore');

const PinForm = React.createClass({
  getInitialState() {
    const board_id = SessionStore.currentUser().boards[0].id;
    return { photo_id: this.props.pin.photo_id, description: '', board_id };
  },
  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  },
  onBoardIdChange(e) {
    this.setState({ board_id: parseInt(e.target.value) });
  },
  handleSubmit(e) {
    e.preventDefault();
    PinActions.addPin(this.state);
    this.props.modalCallback();
  },
  render() {
    const pin = this.props.pin;
    return (
      <div className="pin-form">
        <h2>Add Pin</h2>
        <img src={pin.image_url} alt="a hipster" className="pin-detail-image" />
        <form className="pin-form" onSubmit={this.handleSubmit}>
          <textarea
            id="description"
            cols="30"
            rows="5"
            value={this.state.description}
            placeholder="Description"
            onChange={this.onDescriptionChange}
            className="board-input"
          ></textarea>
          <select onChange={this.onBoardIdChange}>
            {
              SessionStore.currentUser().boards.map(board =>
                <option value={board.id} key={board.id}>{board.name}</option>
              )
            }
          </select>
          <button className="pin-form-button">Add Pin</button>
        </form>
      </div>
    );
  },
});

module.exports = PinForm;
