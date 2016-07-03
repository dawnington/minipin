const Modal = require('react-bootstrap').Modal;
const PinDetail = require('./PinDetail');
const PinForm = require('./PinForm');
const React = require('react');

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
      <div className="card-index-item">
        <div className="pin-index-sub" onClick={this.openPinDetail}>
          <div className="comment-overlay">
            <div className="comment">
              <i className="fa fa-commenting-o"></i>
              <h4>{pin.description}</h4>
            </div>
          </div>
          <img src={pin.image_url} key={pin.pinning_id} alt="a hipster" className="pin-image" />
        </div>

        <Modal show={this.state.detailShown} onHide={this.closePinDetail} >
          <Modal.Body>
            <PinDetail pin={pin} modalCallback={this.closePinDetail} showForm={this.openPinForm} />
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
