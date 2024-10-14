class QcTag extends HTMLElement {

  static get observedAttributes() {
    return ['label', 'href', 'type', 'checked'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._checked = false;  // État interne de la checkbox
  }

  connectedCallback() {
    this.render();
  }

  get template() {
    return `
      <style>
        a, label {
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
          cursor: pointer;
          outline: none;
        }

        a:hover, label:hover, label[aria-checked="true"] {
            border: 1px solid #4A98D9;
            transition: border-color 0.25s linear;
        }

        input[type="checkbox"] {
          display: none; /* Cache la checkbox */
        }

        /* Style appliqué lorsque la case est cochée */
        label[aria-checked="true"] {
          border: 1px solid #4A98D9;
          background-color: #cce0f5;
        }

        label:focus {
          outline: 2px solid #4A98D9; /* Ajout d'un outline pour focus clavier */
        }
      </style>

      ${this.type === 'checkbox' ? this.checkboxTemplate() : this.linkTemplate()}
    `;
  }

  checkboxTemplate() {
    const uniqueId = `qc-tag-checkbox-${Math.random().toString(36).substring(2, 9)}`;
    return `
      <input type="checkbox" id="${uniqueId}" hidden>
      <label for="${uniqueId}" role="checkbox" aria-checked="${this._checked}" tabindex="0">
        ${this.label}
      </label>
    `;
  }

  linkTemplate() {
    return `
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

  get type() {
    return this.getAttribute('type') || 'link';
  }

  set type(value) {
    this.setAttribute('type', value);
  }

  get checked() {
    return this._checked;
  }

  set checked(value) {
    this._checked = value === 'true' || value === true;
    this.updateCheckedState();  // Met à jour l'état visuel de la checkbox
  }

  // Met à jour seulement l'état de la checkbox sans tout réinitialiser
  updateCheckedState() {
    const label = this.shadowRoot.querySelector('label');
    label.setAttribute('aria-checked', this._checked);
    label.style.borderColor = this._checked ? '#4A98D9' : '#dae6f0';
    label.style.backgroundColor = this._checked ? '#cce0f5' : '#dae6f0';
  }

  render() {
    this.shadowRoot.innerHTML = this.template;

    if (this.type === 'checkbox') {
      const label = this.shadowRoot.querySelector('label');
      
      // Bascule l'état de la checkbox lors du clic
      label.addEventListener('click', () => {
        this.checked = !this._checked;
        this.updateCheckedState();  // Met à jour visuellement
      });

      // Bascule l'état de la checkbox via le clavier (Espace ou Enter)
      label.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();  // Empêche le comportement par défaut
          this.checked = !this._checked;
          this.updateCheckedState();  // Met à jour visuellement
        }
      });
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'checked') {
        this.checked = newValue === 'true';
      }
      this.render();
    }
  }
}

customElements.get('qc-tag') || customElements.define('qc-tag', QcTag);

export { QcTag };