class QcTag extends HTMLElement {

  static get observedAttributes() {
    return ['label', 'href'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get template() {
    return `
      <style>
        a {
          color: #095797;
          background-color: #dae6f0;
          border: 1px solid #dae6f0;
          font-weight: 600;
          text-decoration: none;
          padding: 11px 8px;
          font-size: 0.875rem;
          line-height: 1rem;
          transition: border-color 0.25s linear;
          display: inline-block;
        }

        a:hover {
            border: 1px solid #4A98D9;
            transition: border-color 0.25s linear;
        }

      </style>
      <a href="${this.href}">
        ${this.label}
      </a>
    `;
  }

  get label() {
    return this.getAttribute('label') || 'Étiquette par défaut';
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  get href() {
    return this.getAttribute('href') || '#';
  }

  set href(value) {
    this.setAttribute('href', value);
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

customElements.get('qc-tag') || customElements.define('qc-tag', QcTag);

export { QcTag };