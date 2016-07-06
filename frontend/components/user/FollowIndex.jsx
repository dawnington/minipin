const FollowActions = require('../../actions/FollowActions');
const FollowStore = require('../../stores/FollowStore');
const React = require('react');
const UserIndexItem = require('./UserIndexItem');

const FollowIndex = React.createClass({
  getInitialState() {
    return { follows: FollowStore.all() };
  },
  componentDidMount() {
    this.followListener = FollowStore.addListener(this.onChange);
    this.fetchFollows(this.props);
  },
  componentWillReceiveProps(newProps) {
    this.fetchFollows(newProps);
  },
  componentWillUnmount() {
    this.followListener.remove();
    FollowActions.emptyStore();
  },
  onChange() {
    this.setState({ follows: FollowStore.all() });
  },
  fetchFollows(props) {
    const path = props.location.pathname;
    const followPath = path.substring(path.length - 3);
    if (followPath === 'ers') {
      FollowActions.fetchFollowers(props.userId);
    } else if (followPath === 'ing') {
      FollowActions.fetchFollowees(props.userId);
    }
  },
  render() {
    return (
      <div>
        <ul>
          {
            this.state.follows.map(follow =>
              <UserIndexItem follow={follow} key={follow.id} />
            )
          }
        </ul>
      </div>
    );
  },
});

module.exports = FollowIndex;
