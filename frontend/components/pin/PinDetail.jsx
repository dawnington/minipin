const React = require('react');
const SessionStore = require('../../stores/SessionStore');

const PinDetail = React.createClass({
  showPinForm() {
    this.props.showForm();
  },
  render() {
    const pin = this.props.pin;
    return (
      <div className="pin-detail">
        <img src={pin.image_url} alt="a hipster" className="pin-detail-image"/>
        <div className="pin-detail-container">
          <div className="pin-description">
            <h4>{pin.description}</h4>
            <h5>{pin.owner}</h5>
          </div>
          <i className="fa fa-thumb-tack" onClick={this.showPinForm}></i>
        </div>
      </div>
    )
  },
});

module.exports = PinDetail;
