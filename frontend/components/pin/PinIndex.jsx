const Masonry = require('react-masonry-component');
const PinActions = require('../../actions/PinActions');
const PinStore = require('../../stores/PinStore');
const PinIndexItem = require('./PinIndexItem');
const React = require('react');

const PinIndex = React.createClass({
  getInitialState() {
    return { pins: PinStore.all() };
  },
  componentDidMount() {
    this.pinListener = PinStore.addListener(this.onChange);
    this.fetchPins(this.props);
  },
  componentWillReceiveProps(newProps) {
    this.fetchPins(newProps);
  },
  componentWillUnmount() {
    this.pinListener.remove();
    PinActions.emptyStore();
  },
  onChange() {
    this.setState({ pins: PinStore.all() });
  },
  fetchPins(properties) {
    if (properties.hasOwnProperty('boardId')) {
      PinActions.fetchBoardPins(properties.boardId);
    } else if (properties.hasOwnProperty('userId')) {
      PinActions.fetchUserPins(properties.userId);
    }
  },
  render() {
    return (
      <Masonry className="pin-index">
        {
          this.state.pins.map(pin =>
            <PinIndexItem pin={pin} key={pin.pinning_id} />
          )
        }
      </Masonry>
    );
  },
});

module.exports = PinIndex;
