const hashHistory = require('react-router').hashHistory;
const PinActions = require('../../actions/PinActions');
const React = require('react');

const SearchBar = React.createClass({
  getInitialState() {
    return { query: '' };
  },
  onQueryChange(e) {
    this.setState({ query: e.target.value });
  },
  redirectToSearch(e) {
    e.preventDefault();
    PinActions.searchPins(this.state);
    hashHistory.push('search');
  },
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={this.state.query}
          placeholder="Search"
          onChange={this.onQueryChange}
          onSubmit={this.redirectToSearch}
        />
        <i className="fa fa-search" onClick={this.redirectToSearch}></i>
      </div>
    );
  },
});

module.exports = SearchBar;
