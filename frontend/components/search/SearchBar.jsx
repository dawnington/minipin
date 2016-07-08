const hashHistory = require('react-router').hashHistory;
const PinActions = require('../../actions/PinActions');
const React = require('react');

const SearchBar = React.createClass({
  getInitialState() {
    return { query: '' };
  },
  _onQueryChange(e) {
    this.setState({ query: e.target.value });
  },
  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this._redirectToSearch();
    }
  },
  _redirectToSearch() {
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
          onChange={this._onQueryChange}
          onSubmit={this._redirectToSearch}
          onKeyPress={this._handleKeyPress}
        />
        <i className="fa fa-search" onClick={this._redirectToSearch}></i>
      </div>
    );
  },
});

module.exports = SearchBar;
