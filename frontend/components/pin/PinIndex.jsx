const React = require('react');
const PinActions = require('../../actions/PinActions');
const PinStore = require('../../stores/PinStore');
const PinIndexItem = require('./PinIndexItem');

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
  },
  onChange() {
    this.setState({ pins: PinStore.all() });
  },
  fetchPins(properties) {
    if (properties.hasOwnProperty('boardId')) {
      PinActions.fetchBoardPins(properties.boardId);
    } else if (properties.hasOwnProperty('user')) {
      PinActions.fetchUserPins(properties.user.id);
    }
  },
  render() {
    return (
      <div className="card-index">
        {
          this.state.pins.map(pin =>
            <PinIndexItem pin={pin} key={pin.pinning_id} />
          )
        }
      </div>
    );
  },
});

module.exports = PinIndex;
