const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const Modal = require('react-bootstrap').Modal;
const React = require('react');
const SessionActions = require('../actions/SessionActions');
const BoardForm = require('./BoardForm');

const NavBar = React.createClass({
  getInitialState() {
    return { modalShown: false };
  },
  showBoardForm() {
    this.setState({ modalShown: true });
  },
  closeBoardForm() {
    this.setState({ modalShown: false });
  },
  logout() {
    SessionActions.logout();
    hashHistory.push("/");
  },
  render() {
    const user = this.props.user;
    return (
      <div id="nav-bar">
        <i className="fa fa-bars"></i>
        <div className="nav-content">
          <div className="nav-item">
            <Link to="/">Feed</Link>
          </div>
          <h4 className="nav-header">My Boards</h4>
          {
            user.boards.map(board => {
              const boardLink = `/boards/${board.id}`;
              return (
                <div className="nav-item" key={board.id}>
                  <Link key={board.id} to={boardLink}>{board.name}</Link>
                </div>
              );
            })
          }
          <div className="nav-item" onClick={this.showBoardForm}>New Board</div>
        </div>
        <div className="nav-profile">
          <div className="nav-item">{user.name}</div>
          <div className="nav-item" onClick={this.logout}>Log Out</div>
        </div>
        <Modal show={this.state.modalShown} onHide={this.closeBoardForm} >
          <Modal.Body>
            <BoardForm userId={user.id} />
          </Modal.Body>
        </Modal>
      </div>
    )
  },
});

module.exports = NavBar;
