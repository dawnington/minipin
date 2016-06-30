const React = require('react');
const PinActions = require('../actions/PinActions');
const PinStore = require('../stores/PinStore');
const PinIndexItem = require('./PinIndexItem');

const PinIndex = React.createClass({
  getInitialState() {
    return { pins: PinStore.all() };
  },
  componentDidMount() {
    this.pinListener = PinStore.addListener(this.onChange);
    PinActions.fetchAllPins();
  },
  componentWillUnmount() {
    this.pinListener.remove();
  },
  onChange() {
    this.setState({ pins: PinStore.all() });
  },
  render() {
    return (
      <div className="pin-index">
        {
          this.props.pins.map(pin =>
            <PinIndexItem pin={pin} key={pin.id} />
          )
        }
      </div>
    );
  },
});

module.exports = PinIndex;
