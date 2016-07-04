const hashHistory = require('react-router').hashHistory;
const PinActions = require('../../actions/PinActions');
const React = require('react');
const SessionStore = require('../../stores/SessionStore');

const PinDetail = React.createClass({
  showPinForm() {
    this.props.showForm();
  },
  checkForOwner() {
    if (SessionStore.currentUser().id === this.props.pin.owner_id) {
      return <i className="fa fa-trash pin-delete" onClick={this.deletePin}></i>;
    }
    return <div></div>
  },
  goToOwner() {
    const profilePath = `users/${this.props.pin.owner_id}`;
    hashHistory.push(profilePath);
  },
  deletePin() {
    const checkDelete = confirm('Are you sure you want to delete this pin?');
    if (checkDelete) {
      PinActions.deletePinning(this.props.pin.pinning_id);
      this.props.modalCallback();
    }
  },
  render() {
    const pin = this.props.pin;
    return (
      <div className="pin-detail">
        <div className="pin-detail-sub">
          <img src={pin.image_url} alt="a hipster" className="pin-detail-image"/>
          <div className="pin-detail-container">
            <div className="pin-description">
              <h3>{pin.description}</h3>
              <h5 className="board-owner" onClick={this.goToOwner}>{pin.owner}</h5>
            </div>
            <div className="pin-detail-icons">
              <i className="fa fa-thumb-tack" onClick={this.showPinForm}></i>
              {this.checkForOwner()}
            </div>
          </div>
        </div>
      </div>
    )
  },
});

module.exports = PinDetail;
