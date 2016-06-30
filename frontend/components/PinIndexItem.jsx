const React = require('react');

const PinIndexItem = React.createClass({
  render() {
    const pin = this.props.pin;
    console.log(pin);
    return (
      <div className="pin-index-item group">
        <img src={pin.image_url} key={pin.id} alt="a hipster" className="pin-image"/>
        <div className="comment-overlay">{pin.description}</div>
      </div>
    );
  },
});

module.exports = PinIndexItem;
