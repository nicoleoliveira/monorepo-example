export class Button extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    this.render();
  }

  private render(): void {
    this.shadow.innerHTML = `
            <button>
                <slot></slot>
            </button>
        `;
  }
}

customElements.define("my-button", Button);
