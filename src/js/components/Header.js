import {
  HEADER, BTN_AUTH, BTN_LOG_OUT, NAV_LINKS,
} from '../constants/constants';

export default class Header {
  constructor(color) {
    this._color = color;
  }

  render(props) {
    HEADER.classList.add(this._color);
    if (props.isLoggedIn === false) {
      BTN_LOG_OUT.classList.add('unvisible');
      NAV_LINKS[1].classList.add('unvisible');
    } else {
      BTN_AUTH.classList.add('unvisible');
      BTN_LOG_OUT.classList.remove('unvisible');
      NAV_LINKS[1].classList.remove('unvisible');
    }
  }
}
