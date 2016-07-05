const InfiniteScroll = require('react-infinite-scroller');
const Masonry = require('react-masonry-component');
const PinActions = require('../../actions/PinActions');
const PinStore = require('../../stores/PinStore');
const PinIndexItem = require('../pin/PinIndexItem');
const React = require('react');

const FeedIndex = React.createClass({
  getInitialState() {
    return { pins: PinStore.all(), shownPins: PinStore.all().slice(0, 15) };
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
    this.setState({ pins: PinStore.all(), shownPins: PinStore.all().slice(0, 15) });
  },
  loadMore(pageNum) {
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

module.exports = FeedIndex;
