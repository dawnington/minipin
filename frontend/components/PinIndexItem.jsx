const React = require('react');

const PinIndexItem = React.createClass({
  render() {
    const pin = this.props.pin;
    return (
      <div className="pin-index-item">
        <img src={pin.image_url} key={pin.id} alt="a hipster" />
      </div>
    );
  },
});

module.exports = PinIndexItem;
