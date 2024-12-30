const sharedStyles = new CSSStyleSheet();
sharedStyles.replaceSync(`
  :host {
    display: inline-block;

    /* Default CSS Variables */
    --blue-dark: #095797;
    --hover-bg-color: #1472bf;
    --font-family: 'Open Sans', 'Inter', sans-serif;
  }

  button, a {
    font-family: var(--font-family, 'Open Sans', 'Inter', sans-serif);
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    box-sizing: border-box;
    min-width: 112px;
    padding: 14px 22px;
    transition: all 0.24s ease-in-out;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    border: 2px solid transparent;
    border-radius: 0;
    cursor: pointer;
  }

  .block {
    display: block;
  }

  .compact {
    font-size: 14px;
    line-height: 20px;
    min-width: 80px;
    padding: 7px 15px;
    border: 1px solid transparent;
  }

  /* Principal */
  .principal {
    color: #fff;
    border-color: var(--blue-dark);
    background-color: var(--blue-dark);
    box-shadow: 0 1px 4px rgba(34, 54, 84, 0.24);
  }

  .principal:hover {
    border-color: var(--hover-bg-color);
    background-color: var(--hover-bg-color);
  }

  .principal:focus {
    border-color: #223654;
    background-color: var(--hover-bg-color);
    box-shadow: 0 2px 8px rgba(34, 54, 84, 0.24), 0 0 0 2px #4a98d9;
  }

  .principal:active {
    border-color: #3783c9;
    background-color: #3783c9;
  }

  /* Secondaire */
  .secondaire {
    color: var(--blue-dark);
    background-color: #fff;
    border-color: var(--blue-dark);
  }

  .secondaire:hover {
    background-color: rgba(9, 87, 151, 0.16);
  }

  .secondaire:focus {
    border-color: #223654;
    background-color: rgba(9, 87, 151, 0.16);
    box-shadow: 0 0 0 2px #4a98d9;
  }

  .secondaire:active {
    background-color: rgba(9, 87, 151, 0.08);
  }

  /* Session */
  .session {
    color: white;
    border-color: white;
    background-color: var(--blue-dark);
  }

  .session:hover {
    background-color: var(--hover-bg-color);
  }

  .session:focus {
    background-color: var(--hover-bg-color);
  }

  /* Icones */
  .icon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .icon.left {
    margin-right: 8px;
  }

  .icon.right {
    margin-left: 8px;
  }
`);

class QcBouton extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'type', 'href', 'class', 'display', 'size', 'icon', 'icon-position', 'btn-action'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM
    this.shadowRoot.adoptedStyleSheets = [sharedStyles];
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  static defineAttribute(name, defaultValue = null) {
    Object.defineProperty(this.prototype, name, {
      get() {
        return this.getAttribute(name) || defaultValue;
      },
      set(value) {
        if (value) {
          this.setAttribute(name, value);
        } else {
          this.removeAttribute(name);
        }
      },
    });
  }

  get currentType() {
    const type = this.getAttribute('type');
    return ['principal', 'secondaire', 'tertiaire', 'avertissement', 'session'].includes(type) ? type : 'principal';
  }

  get currentDisplay() {
    const display = this.getAttribute('display');
    return ['inline-block', 'block'].includes(display) ? display : 'inline-block';
  }

  get currentSize() {
    const size = this.getAttribute('size');
    return ['normal', 'compact'].includes(size) ? size : 'normal';
  }

  get template() {
    const buttonClass = this.className
      ? `${this.className} ${this.currentType}`
      : `${this.currentType} ${this.currentDisplay} ${this.currentSize}`;

    return `
      ${this.href
        ? `<a href="${this.href}" class="${buttonClass}">
            ${this.icon && this.iconPosition === 'left' ? `<span class="icon left ${this.icon}"></span>` : ''}
            <span class="btn-texte">${this.label}</span>
            ${this.icon && this.iconPosition === 'right' ? `<span class="icon right ${this.icon}"></span>` : ''}
          </a>`
        : `<button ${this.currentAction ? `type="${this.currentAction}"` : ''} class="${buttonClass}">
            ${this.icon && this.iconPosition === 'left' ? `<span class="icon left ${this.icon}"></span>` : ''}
            <span class="btn-texte">${this.label}</span>
            ${this.icon && this.iconPosition === 'right' ? `<span class="icon right ${this.icon}"></span>` : ''}
          </button>`}
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `${this.template}`;
  }
}

['label', 'type', 'href', 'class', 'display', 'size', 'icon', 'icon-position', 'btn-action'].forEach(attr => {
  QcBouton.defineAttribute(attr, attr === 'label' ? 'Bouton' : null);
});

customElements.define('qc-bouton', QcBouton);

export { QcBouton };
