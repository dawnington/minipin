const React = require('react');
const Modal = require('react-bootstrap').Modal;
const PinDetail = require('./PinDetail');

const PinIndexItem = React.createClass({
  getInitialState() {
    return { modalShown: false };
  },
  openPinDetail() {
    this.setState({ modalShown: true });
  },
  closePinDetail() {
    this.setState({ modalShown: false });
  },
  render() {
    const pin = this.props.pin;
    return (
      <div className="pin-index-item">
        <div className="pin-index-sub" onClick={this.openPinDetail}>
          <div className="comment-overlay">{pin.description}</div>
          <img src={pin.image_url} key={pin.id} alt="a hipster" className="pin-image" />
        </div>
        <Modal show={this.state.modalShown} onHide={this.closePinDetail} >
          <Modal.Body>
            <PinDetail pin={pin} />
          </Modal.Body>
        </Modal>
      </div>
    );
  },
});

module.exports = PinIndexItem;
