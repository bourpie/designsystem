import './QcAlerte.css'

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
          `<span class="lnr lnr-warning icone-alerte"></span>` : 
          `<span class="lnr lnr-question-circle icone-alerte"></span>`
        }
        <div role="alert">
          ${this.message}
        </div>
        ${this.fermeture === 'oui' ? `
          <button aria-label="${this.closeButtonLabel}" class="close-btn">
            <span class="lnr lnr-cross"></span>
          </button>` 
          : 
          ''
        }
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
