const React = require('react');
const Modal = require('react-bootstrap').Modal;
const PinDetail = require('./PinDetail');
const PinForm = require('./PinForm');

const PinIndexItem = React.createClass({
  getInitialState() {
    return { detailShown: false, formShown: false };
  },
  openPinDetail() {
    this.setState({ detailShown: true });
  },
  closePinDetail() {
    this.setState({ detailShown: false });
  },
  openPinForm() {
    this.setState({ formShown: true, detailShown: false });
  },
  closePinForm() {
    this.setState({ formShown: false });
  },
  render() {
    const pin = this.props.pin;
    return (
      <div className="pin-index-item">
        <div className="pin-index-sub" onClick={this.openPinDetail}>
          <div className="comment-overlay">{pin.description}</div>
          <img src={pin.image_url} key={pin.pinning_id} alt="a hipster" className="pin-image" />
        </div>

        <Modal show={this.state.detailShown} onHide={this.closePinDetail} >
          <Modal.Body>
            <PinDetail pin={pin} detailCallback={this.closePinDetail} showForm={this.openPinForm} hideForm={this.closePinForm} formState={this.state.formShown}/>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.formShown} onHide={this.closePinForm} >
          <Modal.Body>
            <PinForm pin={pin} modalCallback={this.closePinForm} />
          </Modal.Body>
        </Modal>
      </div>
    );
  },
});

module.exports = PinIndexItem;
