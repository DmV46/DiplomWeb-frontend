export default class Header {
  constructor(props) {
    this.color = props.color;
    this.isLoggedIn = props.isLoggedIn;
    this.userName = props.userName;
  }

  render() {
    document.querySelector('.header').style.color = this.color;
  }
}
