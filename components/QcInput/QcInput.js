import generateUUID from '../../helpers/generateUUID.js';

// Définir une feuille de style partagée
const sharedStyles = new CSSStyleSheet();
sharedStyles.replaceSync(`
    :host {
        display: block;
        position: relative;
    }

    label {
        display: block;
        font-family: 'Open Sans';
        font-weight: bold;
        font-size: 1rem;
    }

    .input {
        padding: 0.5rem;
        margin: 0.313rem 0;
        box-sizing: border-box;
        border: 1px solid #6b778a;
        height: 2.5rem;
    }

    .input:focus {
        outline: 2px solid #4a98d9;
        border: 2px solid #5b6476;
    }

    .input.input-sm {
        width: 100%;
        max-width: 2.5rem; /* Champs petit (jusqu’à 5 caractères) */
    }

    .input.input-md {
        width: 100%;
        max-width: 9.75rem; /* Champs moyen (jusqu’à 16 caractères) */
    }

    .input.input-lg {
        width: 100%;
        max-width: 15.563rem; /* Champs large (jusqu’à 26 caractères) */
    }

    .input.input-xl {
        width: 100%;
        max-width: 33rem; /* Champs extra-large (jusqu’à 58 caractères) */
    }

    .input.input-multi {
        width: 100%;
        height: 100px; /* Champs multiligne */
        resize: vertical;
        margin-bottom: 0;
    }

    .input.input-error {
        border-color: #cb381f;
    }

    .input-aide {
        font-size: 0.875rem;
        color: #223654;
    }

    .input-info-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .input-info {
        margin: 0;
        position: absolute;
        right: 0;
        bottom: -0.875rem;
    }

    .error-message {
        color: #cb381f;
    }

    .champ-requis {
        color: #cb381f;
        font-size: 1rem;
        font-weight: bold;
        margin-left: 0.5rem;
    }

    [disabled] {
        background-color: #f2f2f2;
        border-color: #f2f2f2;
        color: #6b778a;
    }

    :has([required]) label::after {
        content: '*';
        font-size: 1rem;
        font-weight: bold;
        margin-left: 0.5rem;
    }

    :has([required]:user-valid) label::after {
        content: '*';
        color: black;
    }

    :has([required]:user-invalid),
    .has-error label::after {
        content: '*';
        color: #cb381f;
    }
`);


class QcInput extends HTMLElement {
  static get observedAttributes() {
    return ['class', 'type', 'size', 'placeholder', 'label', 'aide', 'value', 'disabled', 'required', 'errorMsg', 'error', 'maxlength', 'maxlength-info'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.adoptedStyleSheets = [sharedStyles]; // Utiliser la feuille de style partagée
    this.render();
  }

  get template() {
    const uniqueId = generateUUID();
    const inputId = `input-${uniqueId}`;
    const aideId = `aide-${uniqueId}`;
    const errorId = `error-${uniqueId}`;
    const maxlengthInfoId = `maxlength-info-${uniqueId}`;
    const inputClass = this.currentSize ? `input-${this.currentSize}` : '';
    const errorClass = this.error ? 'input-error' : '';
    const commonAttributes = this.getCommonAttributes(inputId, inputClass, aideId, errorId, errorClass);
    const inputField = this.currentSize === 'multi'
      ? `<textarea ${commonAttributes} aria-labelledby="${inputId}-label">${this.value}</textarea>`
      : `<input ${commonAttributes} aria-labelledby="${inputId}-label" value="${this.value}">`;

    return `
      <div class="form-group ${this.error ? 'has-error' : ''} ${this.disabled ? 'is-disabled' : ''}">
          <label id="${inputId}-label" for="${inputId}">${this.label}</label> 
          ${this.aide ? `<div class="input-aide" id="${aideId}">${this.aide}</div>` : ''}
          ${inputField}
          ${this.maxlengthInfo || this.error ? `
              <div class="input-info-container">
                  ${this.error ? `<small class="error-message" id="${errorId}" aria-live="polite">${this.errorMsg}</small>` : '<small></small>'}   
                  ${this.currentSize === 'multi' && this.maxlength ? `<small class="maxlength-info" id="${maxlengthInfoId}">${this.maxlengthInfo} ${this.maxlength - (this.value.length || 0)}</small>` : '<small></small>'}
              </div>
          ` : ''}
      </div>
    `;
  }

  getCommonAttributes(inputId, inputClass, aideId, errorId, errorClass) {
    return `
      name="${inputId}" 
      id="${inputId}" 
      placeholder="${this.placeholder}"
      class="input ${inputClass} ${errorClass}"
      ${this.maxlength ? 'maxlength="' + this.maxlength + '"' : ''}
      ${this.disabled ? 'disabled' : ''}
      ${this.required ? 'required' : ''}
      aria-describedby="${this.aide ? aideId : ''} ${this.error ? errorId : ''}"
    `;
  }

  get label() {
    return this.getAttribute('label') || 'Mon champ';
  }
  
  set label(value) {
    if (value) {
      this.setAttribute('label', value);
    } else {
      this.removeAttribute('label');
    }
  }
  
  get placeholder() {
    return this.getAttribute('placeholder') || '';
  }
  
  set placeholder(value) {
    if (value) {
      this.setAttribute('placeholder', value);
    } else {
      this.removeAttribute('placeholder');
    }
  }  

  get type() {
    return this.getAttribute('type') || 'text';
  }

  get size() {
    return this.getAttribute('size') || 'md';
  }

  get value() {
    return this.getAttribute('value') || '';
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  get required() {
    return this.hasAttribute('required');
  }

  get aide() {
    return this.getAttribute('aide') || '';
  }

  get currentSize() {
    const size = this.getAttribute('size');
    return ['sm', 'md', 'lg', 'xl', 'multi'].includes(size) ? size : 'md';
  }

  get errorMsg() {
    return this.getAttribute('errorMsg') || '';
  }

  get error() {
    return this.hasAttribute('error');
  }

  get maxlength() {
    return this.currentSize === 'multi' ? (this.getAttribute('maxlength') || 500) : this.getAttribute('maxlength') || '';
  }

  get maxlengthInfo() {
    return this.getAttribute('maxlength-info') || '';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.addEventListeners();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  addEventListeners() {
    const inputField = this.shadowRoot.querySelector('input, textarea');
    if (inputField) {
      inputField.addEventListener('input', this.updateMaxlengthInfo.bind(this));
    }
  }

  removeEventListeners() {
    const inputField = this.shadowRoot.querySelector('input, textarea');
    if (inputField) {
      inputField.removeEventListener('input', this.updateMaxlengthInfo.bind(this));
    }
  }

  updateMaxlengthInfo(event) {
    const inputField = event.target;
    const maxlengthInfoElement = this.shadowRoot.querySelector('.maxlength-info');
    if (maxlengthInfoElement && this.maxlength && this.currentSize === 'multi') {
      maxlengthInfoElement.textContent = `${this.maxlengthInfo} ${this.maxlength - inputField.value.length}`;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      ${this.template}
    `;
    this.addEventListeners();
  }
}

customElements.define('qc-input', QcInput);
export { QcInput };
