const BoardForm = require('./board/BoardForm');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const Modal = require('react-bootstrap').Modal;
const React = require('react');
const SessionActions = require('../actions/SessionActions');

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
        <div className="sidebar-content">
          <div className="nav-content">
            <div className="nav-item feed-link">
              <Link to="/">Feed</Link>
            </div>
            <div className="nav-header">
              <i className="fa fa-chevron-right"></i>
              <h3>My Boards</h3>
            </div>
            {
              user.boards.map(board => {
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
            <div className="nav-item">{user.name}</div>
            <div className="nav-item" onClick={this.logout}>Log Out</div>
          </div>
        </div>
        <Modal show={this.state.modalShown} onHide={this.closeBoardForm} >
          <Modal.Body>
            <BoardForm userId={user.id} state="creating" modalCallback={this.closeBoardForm}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  },
});

module.exports = NavBar;
