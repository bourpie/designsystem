import { QcBouton } from "../QcBouton/QcBouton";

class QcRecherche extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'class', 'label', 'btnlabel', 'variant'];
  }

  constructor() {
    super();
    this.uuid = `input-${this.generateUUID()}`;
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  get template() {
    return `
      <form class="container">
        <div class="input-container">
          <label for="${this.uuid}" class="visually-hidden">${this.label}</label>
          <input id="${this.uuid}" type="text" placeholder="${this.placeholder}">
          <button type="button" aria-label="Effacer" class="clear-btn"><svg class="lnr lnr-cross"><use xlink:href="#lnr-cross"></use></svg></button>
        </div>

        
        ${this.buttonTemplate}

      </form>
    `;
  }

  get placeholder() {
    return this.getAttribute('placeholder') || 'Rechercher';
  }

  get label() {
    return this.getAttribute('label') || 'Rechercher';
  }

  get btnlabel() {
    return this.getAttribute('btnlabel') || 'Rechercher';
  }

  get variant() {
    return this.getAttribute('variant') || 'light';
  }

  get buttonTemplate() {
    if (this.variant === 'dark') {
      return `<qc-bouton type="tertiaire" icon="lnr-magnifier" label="${this.btnlabel}"></qc-bouton>`;
    } else {
      return `<qc-bouton icon="lnr-magnifier" label="${this.btnlabel}"></qc-bouton>`;
    }
  }

  connectedCallback() {
    this.querySelector('.clear-btn').addEventListener('click', this.clearInput.bind(this));
  }

  clearInput() {
    this.querySelector('input').value = '';
  }

  render() {
    this.innerHTML = this.template;
  }
}

customElements.define('qc-recherche', QcRecherche);

export { QcRecherche };
