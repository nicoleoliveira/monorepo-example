import "@meumonorepo/button";

export class Card extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    this.render();
  }

  private render(): void {
    const style = `
     div {
        display: inline-block;
        width: 250px;
        padding: 16px;
        border: solid 1px #939393;
        font-family: sans-serif
     }

    `;
    this.shadow.innerHTML = `
            <style>${style}</style>
              <div>
                  <slot></slot>

                    <hr>
                    <my-button>Saiba mais</my-button>
              </div>
          `;
  }
}

customElements.define("my-card", Card);
