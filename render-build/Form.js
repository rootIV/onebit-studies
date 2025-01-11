import Component from "./Component.js";

export default class Form extends Component {
  constructor(parent, options) {
    super("form", parent, options);
  }

  addChildren(...childrens) {
    childrens.forEach((children) => {
      this.getdomElement().appendChild(children.getdomElement());
    });
  }
}
