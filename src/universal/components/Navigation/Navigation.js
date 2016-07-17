import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import styles from './Navigation.css';

export default class Navigation extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    menuAnchorEl: PropTypes.object,
    navActions: PropTypes.object.isRequired
  };

  render() {
    const {
      isMenuOpen,
      menuAnchorEl,
      navActions: {openMenu, closeMenu}
    } = this.props;

    return (
      <Paper zDepth={0} className={styles.nav}>
        <IconButton onTouchTap={openMenu} label="Menu">
          <MenuIcon color="#fff"/>
        </IconButton>
        <Popover
          open={isMenuOpen}
          anchorEl={menuAnchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={closeMenu}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Help &amp; feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Sign out"/>
          </Menu>
        </Popover>

        <div className={styles.menuButtons}>
          <Link className={styles.buttonBuffer} to="/kanban">
            <FlatButton className={styles.menuButton} label="Kanban"/>
          </Link>

          <span className="spacer"> | </span>
          {this.props.isAuthenticated ? this.renderLoggedIn() : this.renderLoggedOut()}
        </div>
      </Paper>
    );
  }

  renderLoggedIn() {
    return (
      <Link className={styles.buttonBuffer} to="/logout">
        <FlatButton className={styles.menuButton} label="Logout"/>
      </Link>
    );
  }

  renderLoggedOut() {
    return (
      <span>
        <Link className={styles.buttonBuffer} to="/login">
          <FlatButton className={styles.menuButton} label="Login"/>
        </Link>
        <Link className={styles.buttonBuffer} to="/signup">
          <RaisedButton secondary className={styles.menuButton} label="Sign up"/>
        </Link>
      </span>
    );
  }
}
