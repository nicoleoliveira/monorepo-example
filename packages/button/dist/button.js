class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML="\n            <button>\n                <slot></slot>\n            </button>\n        "}}customElements.define("my-button",t);export{t as Button};
//# sourceMappingURL=button.js.map
