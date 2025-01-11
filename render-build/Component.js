export default class Component {
  #domElement = null;

  constructor(tag, parent, options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }

  getdomElement() {
    return this.#domElement;
  }

  build() {
    this.#domElement = document.createElement(this.tag);
    Object.assign(this.#domElement, this.options);
    return this;
  }

  render() {
    if (this.parent instanceof Component) {
      this.parent.getdomElement().append(this.#domElement);
    } else {
      document.querySelector(this.parent).append(this.#domElement);
    }
  }
}
