class QcBouton extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'type', 'href', 'class', 'display', 'size', 'icon', 'icon-position', 'btn-action'];
  }

  constructor() {
    super();
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  get template() {
    const buttonClass = this.className ? this.className + ' ' + this.currenttype : this.currenttype + ' ' + this.currentDisplay + ' ' + this.currentSize;

    return `
      ${this.href ? 
        `<a href="${this.href}" class="${buttonClass}">
          ${this.icon && this.iconPosition === 'left' ? `<span class="lnr ${this.icon} left"></span>` : ''}
          <span class="btn-texte">${this.label}</span>
          ${this.icon && this.iconPosition === 'right' ? `<span class="lnr ${this.icon} right"></span>` : ''}
        </a>` : 
        `<button ${this.currentAction ? ` type="${this.currentAction}"` : ''} class="${buttonClass}">
          ${this.icon && this.iconPosition === 'left' ? `<span class="lnr ${this.icon} left"></span>` : ''}
          <span class="btn-texte">${this.label}</span>
          ${this.icon && this.iconPosition === 'right' ? `<span class="lnr ${this.icon} right"></span>` : ''}
        </button>`
      }
    `;
  }

  get label() {
    return this.getAttribute('label') || 'Bouton';
  }

  get currenttype() {
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

  get icon() {
    return this.getAttribute('icon');
  }

  get iconPosition() {
    const position = this.getAttribute('icon-position');
    return ['left', 'right'].includes(position) ? position : 'left';
  }

  get href() {
    return this.getAttribute('href');
  }

  get currentAction() {
    const action = this.getAttribute('btn-action');
    // Si l'attribut 'btn-action' est défini et sa valeur est 'submit', on retourne null
    return action === 'submit' ? null : action;  // Retourne null si 'btn-action' est 'submit', sinon la valeur de 'btn-action'
  }
  
  render() {
    this.innerHTML = this.template;
  }
}

customElements.get('qc-bouton') || customElements.define('qc-bouton', QcBouton);

export { QcBouton };
