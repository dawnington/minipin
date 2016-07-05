const InfiniteScroll = require('react-infinite-scroller');
const Masonry = require('react-masonry-component');
const PinActions = require('../../actions/PinActions');
const PinStore = require('../../stores/PinStore');
const PinIndexItem = require('./PinIndexItem');
const React = require('react');

const PinIndex = React.createClass({
  getInitialState() {
    return { pins: PinStore.all(), shownPins: PinStore.all().slice(0, 15) };
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
    this.setState({ pins: PinStore.all(), shownPins: PinStore.all().slice(0, 15) });
  },
  fetchPins(properties) {
    if (properties.hasOwnProperty('boardId')) {
      PinActions.fetchBoardPins(properties.boardId);
    } else if (properties.hasOwnProperty('userId')) {
      PinActions.fetchUserPins(properties.userId);
    }
  },
  loadMore(pageNum) {
    console.log('is this running?');
    const allPins = PinStore.all();
    this.setState({ shownPins: allPins.slice(0, 15 * (pageNum + 1)) });
  },
  render() {
    let infiniteScroll = '';
    if (this.state.pins.length > 0) {
      infiniteScroll = (
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.pins.length > this.state.shownPins.length}
        >
          <Masonry className="pin-index">
            {
              this.state.shownPins.map(pin =>
                <PinIndexItem pin={pin} key={pin.pinning_id} />
              )
            }
          </Masonry>
        </InfiniteScroll>
      );
    }
    return (
      <div>
        {infiniteScroll}
      </div>
    );
  },
});

module.exports = PinIndex;
