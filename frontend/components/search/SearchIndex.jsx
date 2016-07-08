const PinActions = require('../../actions/PinActions');
const PinIndex = require('../pin/PinIndex');
const React = require('react');

const SearchIndex = React.createClass({
  onQueryChange(e) {
    PinActions.searchPins({ query: e.target.value });
  },
  render() {
    return (
      <div className="main">
        <hgroup className="header">
          <div className="search-header">
            <input
              type="text"
              className="header-search-bar"
              placeholder="Search pins"
              onInput={this.onQueryChange}
            />
          </div>
        </hgroup>
        <PinIndex />
      </div>
    );
  },
});

module.exports = SearchIndex;
