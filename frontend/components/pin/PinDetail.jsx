const hashHistory = require('react-router').hashHistory;
const PinActions = require('../../actions/PinActions');
const React = require('react');
const SessionStore = require('../../stores/SessionStore');
const TagActions = require('../../actions/TagActions');
const TagStore = require('../../stores/TagStore');

const PinDetail = React.createClass({
  getInitialState() {
    return { tags: TagStore.all() };
  },
  componentDidMount() {
    this.tagListener = TagStore.addListener(this._onChange);
    TagActions.fetchTags(this.props.pin.id);
  },
  componentWillUnmount() {
    this.tagListener.remove();
  },
  _onChange() {
    this.setState({ tags: TagStore.all() });
  },
  showPinForm() {
    this.props.showForm();
  },
  checkForOwner() {
    if (SessionStore.currentUser().id === this.props.pin.owner_id) {
      return <i className="fa fa-trash pin-delete hover-item" onClick={this.deletePin}></i>;
    }
    return <div></div>
  },
  goToBoard() {
    const boardPath = `boards/${this.props.pin.board_id}`;
    hashHistory.push(boardPath);
    this.props.modalCallback();
  },
  deletePin() {
    const checkDelete = confirm('Are you sure you want to delete this pin?');
    if (checkDelete) {
      PinActions.deletePin(this.props.pin.id);
      this.props.modalCallback();
    }
  },
  render() {
    const pin = this.props.pin;
    const tagNames = TagStore.all().map(name => `#${name}`).join(', ');
    return (
      <div className="pin-detail">
        <div className="pin-detail-sub">
          <img src={pin.image_url} alt="a hipster" className="pin-detail-image"/>
          <div className="pin-detail-container">
            <div className="pin-description">
              <h3>{pin.description}</h3>
              <h5 className="board-name hover-item" onClick={this.goToBoard}>from {pin.board_name}</h5>
              <h5>{tagNames}</h5>
            </div>
            <div className="pin-detail-icons">
              <i className="fa fa-thumb-tack hover-item" onClick={this.showPinForm}></i>
              {this.checkForOwner()}
            </div>
          </div>
        </div>
      </div>
    )
  },
});

module.exports = PinDetail;
