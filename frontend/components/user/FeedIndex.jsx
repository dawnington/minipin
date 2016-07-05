const Masonry = require('react-masonry-component');
const PinActions = require('../../actions/PinActions');
const PinStore = require('../../stores/PinStore');
const PinIndexItem = require('../pin/PinIndexItem');
const React = require('react');

const FeedIndex = React.createClass({
  getInitialState() {
    return { pins: PinStore.all() };
  },
  componentDidMount() {
    this.pinListener = PinStore.addListener(this.onChange);
    PinActions.fetchFeed(this.props.userId);
  },
  componentWillReceiveProps(newProps) {
    PinActions.fetchFeed(newProps.userId);
  },
  componentWillUnmount() {
    this.pinListener.remove();
    PinActions.emptyStore();
  },
  onChange() {
    this.setState({ pins: PinStore.all() });
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

module.exports = FeedIndex;
