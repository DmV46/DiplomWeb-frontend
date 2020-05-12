export default class BaseComponent {
  constructor(container) {
    this._container = document.querySelector(container) || null;
  }

  createComponent(tag, arrayClasses, markup) {
    const element = document.createElement(tag);
    if (arrayClasses) {
      arrayClasses.map((className) => element.classList.add(className));
    }
    if (markup) {
      element.insertAdjacentHTML('beforeend', markup);
    }
    this._component = element;
  }

  _render(template) {
    this._container.appendChild(template);
  }

  remove(className) {
    if (className) {
      this._container.querySelector(className).remove();
    }
    this._component.remove();
  }

  show(className) {
    this._component.classList.remove(className);
  }

  hide(className) {
    this._component.classList.add(className);
  }

  // _setEventListeners(arrayListeners) {
  //   arrayListeners.forEach((item) => {
  //     this._component.querySelector(item[0]).addEventListener(item[1], item[2]);
  //   });
  // }

  // _removeEventListeners(arrayListeners) {
  //   arrayListeners.forEach((item) => {
  //     this._component.querySelector(item[0]).removeEventListener(item[1], item[2]);
  //   });
  // }
}
