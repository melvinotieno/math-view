import { convertLatexToMarkup } from "mathlive";

class MathView extends HTMLElement {
  constructor() {
    // super should always be called first in the constructor
    super();
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
    const element = document.createElement(this.tag | "span");

    const mathstyles = ["displaystyle", "textstyle"];
    const letterShapeStyles = ["tex", "french", "iso", "upright", "auto"];

    let mathstyle = "displaystyle";
    let letterShapeStyle = "tex";

    if (this.hasAttribute("mathstyle") && mathstyles.includes(this.mathstyle)) {
      mathstyle = this.mathstyle;
    }

    if (
      this.hasAttribute("lettershapestyle") &&
      letterShapeStyles.includes(this.lettershapestyle)
    ) {
      letterShapeStyle = this.lettershapestyle;
    }

    element.innerHTML = convertLatexToMarkup(this.latex, {
      mathstyle,
      letterShapeStyle,
    });

    shadowRoot.appendChild(element);
  }
}

customElements.define("math-view", MathView);
