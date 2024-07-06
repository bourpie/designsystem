import loupePivLight from '../../assets/icons/loupe-piv-light.svg';
import loupePivDark from '../../assets/icons/loupe-piv-dark.svg';
import './QcRecherche.css';
import generateUUID from '../../helpers/generateUUID.js';

class QcRecherche extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'class', 'label', 'btnlabel', 'variant', 'action'];
  }

  constructor() {
    super();
    this.uuid = `input-${generateUUID()}`;
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  get template() {
    return `
      <form method="get" action="${this.action}" class="container">
        <div class="input-group">
          <label for="${this.uuid}" class="visually-hidden">${this.label}</label>
          <input id="${this.uuid}" type="text" placeholder="${this.placeholder}" class="form-control search-input" />
          <button type="button" aria-label="Effacer" class="clear-btn"><span class="lnr lnr-cross"></span></button>
          <span class="input-group-btn">
              <button aria-label="${this.btnlabel}" class="btn-search">
              ${this.variant === 'dark' ? `<img src="${loupePivDark}" alt="Rechercher" width="24" height="24" />` : `<img src="${loupePivLight}" alt="Rechercher" width="24" height="24" />`}
              </button>
          </span> 
        </div>
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

  get action() {
    return this.getAttribute('action') || '/';
  }

  connectedCallback() {
    this.querySelector('.clear-btn').addEventListener('click', this.clearInput.bind(this));
  }

  clearInput() {
    this.querySelector('input').value = '';
    this.querySelector('.search-input').focus();
  }

  render() {
    this.innerHTML = this.template;
  }
}

customElements.get('qc-recherche') || customElements.define('qc-recherche', QcRecherche);

export { QcRecherche };
