const React = require('react');

const SearchBar = React.createClass({
  getInitialState() {
    return { query: '' };
  },
  onQueryChange(e) {
    this.setState({ query: e.target.value });
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
        />
      <i className="fa fa-search"></i>
      </div>
    );
  },
});

module.exports = SearchBar;
