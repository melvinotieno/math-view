import { convertLatexToMarkup } from "mathlive";

class MathView extends HTMLElement {
  constructor() {
    super(); // super should always be called first in the constructor
  }

  static get observedAttributes() {
    return ["latex"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const element = document.createElement(this.tag || "span");

    const defaultModes = ["inline-math", "math", "text"];
    const letterShapeStyles = ["tex", "french", "iso", "upright", "auto"];

    let defaultMode = "math";
    let letterShapeStyle = "auto";

    if (
      this.hasAttribute("defaultmode") &&
      defaultModes.includes(this.defaultmode)
    ) {
      defaultMode = this.defaultmode;
    }

    if (
      this.hasAttribute("lettershapestyle") &&
      letterShapeStyles.includes(this.lettershapestyle)
    ) {
      letterShapeStyle = this.lettershapestyle;
    }

    element.innerHTML = convertLatexToMarkup(this.latex, {
      defaultMode,
      letterShapeStyle,
    });

    shadowRoot.appendChild(element);
  }
}

customElements.define("math-view", MathView);
