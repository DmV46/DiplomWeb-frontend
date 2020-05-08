export default class BaseComponent {
  constructor(container) {
    this._container = document.querySelector(container);
    this._component = null;
  }

  _createComponent(tag, ...args) {
    const element = document.createElement(tag);
    if (args[0]) {
      args[0].map((className) => element.classList.add(className));
    }
    if (args[1]) {
      element.insertAdjacentHTML('beforeend', args[1]);
    }
    this._component = element;
  }

  _render(template) {
    this._container.appendChild(template);
  }

  remove(className) {
    this._container.querySelector(className).remove();
  }

  show(className) {
    this._component.classList.remove(className);
  }

  hide(className) {
    this._component.classList.add(className);
  }
}
