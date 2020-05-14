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

  setAttribute(element, arrtibute, value) {
    if (element) {
      this._component.querySelector(element).setAttribute(arrtibute, value);
    } else {
      this._component.setAttribute(arrtibute, value);
    }
  }

  addClasslist(...args) {
    if (args.length === 1) {
      this._component.classList.add(args[0]);
    } else {
      this._component.querySelector(args[0]).classList.add(args[1]);
    }
  }
}
