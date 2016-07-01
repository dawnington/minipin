const PinActions = require('../../actions/PinActions');
const PinIndex = require('../pin/PinIndex');
const PinStore = require('../../stores/PinStore');
const React = require('react');
const SessionStore = require('../../stores/SessionStore');

const UserPinIndex = React.createClass({
  getInitialState() {
    return { user: SessionStore.currentUser(), pins: PinStore.all() };
  },
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.onChange);
    this.pinListener = PinStore.addListener(this.onPinChange);
    PinActions.fetchUserPins(this.state.user.id);
  },
  componentWillUnmount() {
    this.pinListener.remove();
    this.sessionListener.remove();
  },
  onChange() {
    this.setState({ user: SessionStore.currentUser() });
  },
  onPinChange() {
    this.setState({ pins: PinStore.all() });
  },
  render() {
    return (
      <div className="board">
        <hgroup className="board-header">
          <div className="board-heading">
            <div className="board-title">
              <h3 className="board-name">My Pins</h3>
              <h5 className="board-description">All of the things that inspire me</h5>
            </div>
          </div>
        </hgroup>
        <PinIndex pins={this.state.pins} />
      </div>
    );
  },
});

module.exports = UserPinIndex;
