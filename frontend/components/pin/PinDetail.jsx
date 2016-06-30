const React = require('react');

const PinDetail = React.createClass({
  render() {
    const pin = this.props.pin;
    return (
      <div className="pin-detail">
        <img src={pin.image_url} alt="a hipster" className="pin-detail-image"/>
        <div className="pin-detail-container">
          {pin.description}
          <button>Pin it!</button>
        </div>
      </div>
    )
  },
});

module.exports = PinDetail;
