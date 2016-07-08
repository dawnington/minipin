const PinActions = require('../../actions/PinActions');
const PinIndex = require('../pin/PinIndex');
const React = require('react');

const SearchIndex = React.createClass({
  getInitialState() {
    return { query: '' };
  },
  onQueryChange(e) {
    this.setState({ query: e.target.value });
    // PinActions.searchPins(this.state);
  },
  render() {
    return (
      <div className="main">
        <hgroup className="header">
          <div className="search-header">
            <input
              type="text"
              className="header-search-bar"
              value={this.state.query}
              placeholder="Search"
              onChange={this.onQueryChange}
            />
          </div>
        </hgroup>

      </div>
    )
  },
});

module.exports = SearchIndex;
