export default class Result {
  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  // render() {} добавлять на траницу блок и ставить слушатели

  showBlock(selectorBlock, selectorUnvisible) {
    this._element.querySelector(selectorBlock).classList.remove(selectorUnvisible);
  }

  hideBlock(selectorBlock, selectorUnvisible) {
    this._element.querySelector(selectorBlock).classList.add(selectorUnvisible);
  }
}
