const BoardForm = require('./board/BoardForm');
const hashHistory = require('react-router').hashHistory;
const IndexLink = require('react-router').IndexLink;
const Link = require('react-router').Link;
const Modal = require('react-bootstrap').Modal;
const PinActions = require('../actions/PinActions');
const PinForm = require('./pin/PinForm');
const PinStore = require('../stores/PinStore');
const React = require('react');
const SessionActions = require('../actions/SessionActions');
const SessionStore = require('../stores/SessionStore');

const NavBar = React.createClass({
  getInitialState() {
    return { boardModalShown: false, boards: SessionStore.currentUser().boards, pinModalShown: false, pinCreated: false };
  },
  componentDidMount() {
    this.pinListener = PinStore.addListener(this.createNewPinning);
    this.sessionListener = SessionStore.addListener(this.onChange);
  },
  componentWillUnmount() {
    this.pinListener.remove();
    this.sessionListener.remove();
  },
  onChange() {
    this.setState({ boards: SessionStore.currentUser().boards });
  },
  createNewPinning() {
    if (this.state.pinCreated) {
      this.setState({ pinModalShown: true });
    }
  },
  showBoardForm() {
    this.setState({ boardModalShown: true });
  },
  closeBoardForm() {
    this.setState({ boardModalShown: false });
  },
  addPinImage() {
    let that = this;

    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      function (error, images) {
        if (error === null) {
          for (let i = 0; i < images.length; i++) {
            const pin = { image_url: images[i].url };
            that.setState({ pinCreated: true });
            PinActions.createPin(pin);
          }
        }
      }
    );
  },
  closePinForm() {
    this.setState({ pinModalShown: false, pinCreated: false });
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
            <div className="new-button-container">
              <div className="nav-item new-button" onClick={this.addPinImage}>New Pin</div>
              <div className="nav-item new-button" onClick={this.showBoardForm}>New Board</div>
            </div>
          </div>
          <div className="nav-profile">
            <div className="nav-item nav-button" onClick={this.redirectToProfile}>{user.name}</div>
            <div className="nav-item nav-button" onClick={this.logout}>Log Out</div>
          </div>
        </div>
        <Modal show={this.state.boardModalShown} onHide={this.closeBoardForm} >
          <Modal.Body>
            <BoardForm userId={user.id} modalCallback={this.closeBoardForm} />
          </Modal.Body>
        </Modal>
        <Modal show={this.state.pinModalShown} onHide={this.closePinForm} >
          <Modal.Body>
            <PinForm userId={user.id} pin={PinStore.newPin()} modalCallback={this.closePinForm} />
          </Modal.Body>
        </Modal>
      </div>
    );
  },
});

module.exports = NavBar;
