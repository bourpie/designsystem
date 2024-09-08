import loupePivLight from '../../assets/icons/loupe-piv-light.svg';
import loupePivDark from '../../assets/icons/loupe-piv-dark.svg';
import './QcRecherche.css';
import generateUUID from '../../helpers/generateUUID.js';

class QcRecherche extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'class', 'label', 'btnlabel', 'variant', 'action', 'id', 'name', 'value'];
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

  connectedCallback() {
    const clearBtn = this.querySelector('.clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', this.clearInput.bind(this));
    }
  }

  clearInput() {
    const input = this.querySelector('input');
    if (input) {
      input.value = '';
      input.focus();
    }
  }

  render() {
    this.innerHTML = this.template;
  }

  get template() {
    return `
      <form method="get" action="${this.action}" class="container">
        <div class="input-group">
          <label for="${this.inputId}" class="visually-hidden">${this.label}</label>
          <input
            id="${this.inputId}"
            name="${this.inputName}"
            type="text"
            placeholder="${this.placeholder}"
            class="form-control search-input"
            value="${this.inputValue}"
          />
          <button type="button" aria-label="Effacer" class="clear-btn"><span class="lnr lnr-cross"></span></button>
          <span class="input-group-btn">
            <button type="submit" aria-label="${this.btnlabel}" class="btn-search">
              ${this.generateSearchIcon()}
            </button>
          </span>
        </div>
      </form>
    `;
  }

  generateSearchIcon() {
    const iconSrc = this.variant === 'dark' ? loupePivDark : loupePivLight;
    return `<img src="${iconSrc}" alt="Rechercher" width="24" height="24" />`;
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
    const currentLang = document.documentElement.lang || 'fr'; // Obtention de la langue du document
    const baseAction = this.getAttribute('action') || '/';
    return `${baseAction}?lang=${currentLang}`; // Ajout de la langue à l'URL d'action
  }

  get inputId() {
    return this.getAttribute('id') || this.uuid;
  }

  get inputName() {
    return this.getAttribute('name') || 'query'; // Utilisation de 'query' comme nom par défaut
  }

  get inputValue() {
    const urlParams = new URLSearchParams(window.location.search);
    return this.getAttribute('value') || urlParams.get('query') || ''; // Récupération de la valeur à partir de l'URL
  }
}

customElements.get('qc-recherche') || customElements.define('qc-recherche', QcRecherche);
export { QcRecherche };
