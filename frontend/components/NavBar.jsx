const BoardForm = require('./board/BoardForm');
const hashHistory = require('react-router').hashHistory;
const IndexLink = require('react-router').IndexLink;
const Link = require('react-router').Link;
const Modal = require('react-bootstrap').Modal;
const React = require('react');
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const NavBar = React.createClass({
  getInitialState() {
    return { modalShown: false, boards: SessionStore.currentUser().boards };
  },
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.onChange);
  },
  componentWillUnmount() {
    this.sessionListener.remove();
  },
  onChange() {
    this.setState({ boards: SessionStore.currentUser().boards });
  },
  showBoardForm() {
    this.setState({ modalShown: true });
  },
  closeBoardForm() {
    this.setState({ modalShown: false });
  },
  redirectToProfile() {
    const profilePath = `users/${this.props.user.id}`;
    hashHistory.push(profilePath);
  },
  logout() {
    SessionActions.logout();
  },
  render() {
    const user = this.props.user;
    return (
      <div id="nav-bar">
        <i className="fa fa-bars"></i>
        <div className="sidebar-content">
          <div className="nav-content">
            <div className="nav-item nav-button">
              <h3>Feed</h3>
              <IndexLink to="/" className="nav-item-link"></IndexLink>
            </div>
            <div className="nav-header">
              <i className="fa fa-chevron-right"></i>
              <h3>My Boards</h3>
            </div>
            {
              this.state.boards.map(board => {
                const boardLink = `/boards/${board.id}`;
                return (
                  <div className="nav-item" key={board.id}>
                    {board.name}
                    <Link key={board.id} to={boardLink} className="nav-item-link"></Link>
                  </div>
                );
              })
            }
            <div className="nav-item new-board-button" onClick={this.showBoardForm}>New Board</div>
          </div>
          <div className="nav-profile">
            <div className="nav-item nav-button" onClick={this.redirectToProfile}>{user.name}</div>
            <div className="nav-item nav-button" onClick={this.logout}>Log Out</div>
          </div>
        </div>
        <Modal show={this.state.modalShown} onHide={this.closeBoardForm} >
          <Modal.Body>
            <BoardForm userId={user.id} modalCallback={this.closeBoardForm} />
          </Modal.Body>
        </Modal>
      </div>
    );
  },
});

module.exports = NavBar;
