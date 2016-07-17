import {Map as iMap} from 'immutable';

export const OPEN_MENU = 'nav/OPEN_MENU';
export const CLOSE_MENU = 'nav/CLOSE_MENU';

const initialState = iMap({
  isMenuOpen: false,
  menuAnchorEl: undefined
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MENU:
      return state.merge({
        isMenuOpen: true,
        menuAnchorEl: action.menuAnchorEl
      });
    case CLOSE_MENU:
      return state.merge({
        isMenuOpen: false,
        menuAnchorEl: undefined
      });
    default:
      return state;
  }
}

export function closeMenu() {
  return {
    type: CLOSE_MENU
  };
}

export function openMenu(event) {
	// This prevents ghost click
  event.preventDefault();
  return {
    type: OPEN_MENU,
    menuAnchorEl: event.currentTarget
  };
}

export const navActions = {
  closeMenu,
  openMenu
};
