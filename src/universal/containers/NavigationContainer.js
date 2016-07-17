import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ensureState} from 'redux-optimistic-ui';
import Navigation from '../components/Navigation/Navigation';
import {navActions} from 'universal/ducks/navigation';

@connect(mapStateToProps, mapDispatchToProps)
export default class NavigationContainer extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    menuAnchorEl: PropTypes.object,
    navActions: PropTypes.object.isRequired
  };

  render() {
    const {isAuthenticated, isMenuOpen, menuAnchorEl, navActions} = this.props;
    return (
      <Navigation
        isAuthenticated={isAuthenticated}
        isMenuOpen={isMenuOpen}
        menuAnchorEl={menuAnchorEl}
        navActions={navActions}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isMenuOpen: ensureState(state).getIn(['navigation', 'isMenuOpen']),
    menuAnchorEl: ensureState(state).getIn(['navigation', 'menuAnchorEl'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navActions: bindActionCreators({...navActions}, dispatch),
    dispatch
  };
}
