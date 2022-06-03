import { convertLatexToMarkup } from "mathlive";

class MathView extends HTMLElement {
  constructor() {
    // super should always be called first in the constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    div.innerHTML = convertLatexToMarkup(this.equation);
    shadowRoot.appendChild(div);
  }

  static get observedAttributes() {
    return ["latex"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
}

customElements.define("math-view", MathView);
