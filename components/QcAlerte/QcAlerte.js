class QcAlerte extends HTMLElement {
  static get observedAttributes() {
    return ['message', 'type', 'class', 'fermeture'];
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
    return `
      <div class="container"¨>
        ${this.type === 'avertissement' ? 
          `<svg class="lnr lnr-warning icone-alerte"><use xlink:href="#lnr-warning"></use></svg>` : 
          `<svg class="lnr lnr-question-circle icone-alerte"><use xlink:href="#lnr-question-circle"></use></svg>`
        }
        <div role="alert">
          ${this.message}
        </div>
        ${this.fermeture === 'oui' ? `<button aria-label="${this.closeButtonLabel}" class="close-btn"><svg class="lnr lnr-cross"><use xlink:href="#lnr-cross"></use></svg></button>` : ''}
      </div>
    `;
  }

  get message() {
    return this.getAttribute('message');
  }

  get type() {
    return this.getAttribute('type') || 'avertissement';
  }

  get fermeture() {
    return this.getAttribute('fermeture') || 'non';
  }

  get closeButtonLabel() {
    const lang = document.documentElement.lang || 'en';
    switch (lang) {
      case 'fr-CA':
        return 'Fermer le message';
      case 'es':
        return 'Cerrar el mensaje';
      default:
        return 'Close the message';
    }
  }

  render() {
    this.innerHTML = this.template;
    if (this.fermeture === 'oui') {
      this.querySelector('.close-btn').addEventListener('click', () => this.closeAlert());
    }
  }

  closeAlert() {
    this.style.display = 'none';
  }
}

customElements.get('qc-alerte') || customElements.define('qc-alerte', QcAlerte);

export { QcAlerte };
