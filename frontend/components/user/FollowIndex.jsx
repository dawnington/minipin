const Link = require('react-router').Link;
const React = require('react');
const FollowActions = require('../../actions/FollowActions');
const FollowStore = require('../../stores/FollowStore');

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
            this.state.follows.map(follow => {
              const userPath = `users/${follow.user_id}`;
              return <Link to={userPath} key={follow.id}>{follow.name}</Link>;
            })
          }
        </ul>
      </div>
    );
  },
});

module.exports = FollowIndex;
