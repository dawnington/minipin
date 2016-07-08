const InfiniteScroll = require('react-infinite-scroller');
const Masonry = require('react-masonry-component');
const PinActions = require('../../actions/PinActions');
const PinStore = require('../../stores/PinStore');
const PinIndexItem = require('./PinIndexItem');
const React = require('react');

const PinIndex = React.createClass({
  getInitialState() {
    return { pins: PinStore.all(), shownPins: PinStore.all().slice(0, 10) };
  },
  componentDidMount() {
    this.pinListener = PinStore.addListener(this.onChange);
    this.fetchPins();
  },
  componentWillUnmount() {
    this.pinListener.remove();
    PinActions.emptyStore();
  },
  onChange() {
    this.setState({ pins: PinStore.all(), shownPins: PinStore.all().slice(0, 10) });
  },
  fetchPins() {
    if (this.props.hasOwnProperty('userId')) {
      PinActions.fetchPins({ user_id: this.props.userId });
    }
  },
  loadFunc(pageNum) {
    const allPins = PinStore.all();
    this.setState({ shownPins: allPins.slice(0, 10 * (pageNum + 1)) });
  },
  render() {
    let infiniteScroll = '';
    if (this.state.pins.length > 0) {
      infiniteScroll = (
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={this.state.pins.length > this.state.shownPins.length}
          threshold={100}
        >
          <Masonry className="pin-index" elementType={'div'}>
            {
              this.state.shownPins.map(pin =>
                <PinIndexItem pin={pin} key={pin.id} />
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
