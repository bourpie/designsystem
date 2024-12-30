import generateUUID from '../../helpers/generateUUID.js';

// Définir une feuille de style partagée
const sharedStyles = new CSSStyleSheet();
sharedStyles.replaceSync(`
    :host {
        display: block;
        position: relative;
        --input-border-color: #6b778a;
        --input-focus-outline: #4a98d9;
        --input-focus-border: #5b6476;
        --input-error-border: #cb381f;
        --input-disabled-bg: #f2f2f2;
        --input-disabled-color: #6b778a;
        --input-aide-color: #223654;
        --error-message-color: #cb381f;
        --required-indicator-color: #cb381f;
        --required-indicator-valid-color: black;
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
        border: 1px solid var(--input-border-color);
        height: 2.5rem;
    }

    .input:focus {
        outline: 2px solid var(--input-focus-outline);
        border: 2px solid var(--input-focus-border);
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
        border-color: var(--input-error-border);
    }

    .input-aide {
        font-size: 0.875rem;
        color: var(--input-aide-color);
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
        color: var(--error-message-color);
    }

    .champ-requis {
        color: var(--required-indicator-color);
        font-size: 1rem;
        font-weight: bold;
        margin-left: 0.5rem;
    }

    [disabled] {
        background-color: var(--input-disabled-bg);
        border-color: var(--input-disabled-bg);
        color: var(--input-disabled-color);
    }

    :has([required]) label::after {
        content: '*';
        font-size: 1rem;
        font-weight: bold;
        margin-left: 0.5rem;
        color: var(--required-indicator-color);
    }

    :has([required]:user-valid) label::after {
        content: '*';
        color: var(--required-indicator-valid-color);
    }

    :has([required]:user-invalid),
    .has-error label::after {
        content: '*';
        color: var(--required-indicator-color);
    }
`);

class QcInput extends HTMLElement {
  static get observedAttributes() {
    return ['class', 'type', 'size', 'placeholder', 'label', 'aide', 'value', 'disabled', 'required', 'errorMsg', 'error', 'maxlength', 'maxlength-info'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.adoptedStyleSheets = [sharedStyles];
    this.defaultAttributes = {
      label: 'Mon champ',
      placeholder: '',
      type: 'text',
      size: 'md',
      value: '',
      aide: '',
      errorMsg: '',
      maxlength: '',
      maxlengthInfo: '',
    };
    this.render();
  }

  getAttributeOrDefault(attr) {
    return this.getAttribute(attr) ?? this.defaultAttributes[attr] ?? null;
  }

  setAttributeIfValue(attr, value) {
    if (value !== null && value !== undefined) {
      this.setAttribute(attr, value);
    } else {
      this.removeAttribute(attr);
    }
  }

  get label() {
    return this.getAttributeOrDefault('label');
  }
  set label(value) {
    this.setAttributeIfValue('label', value);
  }

  get placeholder() {
    return this.getAttributeOrDefault('placeholder');
  }
  set placeholder(value) {
    this.setAttributeIfValue('placeholder', value);
  }

  get type() {
    return this.getAttributeOrDefault('type');
  }
  set type(value) {
    this.setAttributeIfValue('type', value);
  }

  get size() {
    const size = this.getAttributeOrDefault('size');
    return ['sm', 'md', 'lg', 'xl', 'multi'].includes(size) ? size : 'md';
  }
  set size(value) {
    this.setAttributeIfValue('size', value);
  }

  get value() {
    return this.getAttributeOrDefault('value');
  }
  set value(value) {
    this.setAttributeIfValue('value', value);
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }
  set disabled(value) {
    this.setAttributeIfValue('disabled', value ? '' : null);
  }

  get required() {
    return this.hasAttribute('required');
  }
  set required(value) {
    this.setAttributeIfValue('required', value ? '' : null);
  }

  get aide() {
    return this.getAttributeOrDefault('aide');
  }
  set aide(value) {
    this.setAttributeIfValue('aide', value);
  }

  get errorMsg() {
    return this.getAttributeOrDefault('errorMsg');
  }
  set errorMsg(value) {
    this.setAttributeIfValue('errorMsg', value);
  }

  get error() {
    return this.hasAttribute('error');
  }
  set error(value) {
    this.setAttributeIfValue('error', value ? '' : null);
  }

  get maxlength() {
    return this.currentSize === 'multi' ? (this.getAttributeOrDefault('maxlength') || 500) : this.getAttributeOrDefault('maxlength');
  }
  set maxlength(value) {
    this.setAttributeIfValue('maxlength', value);
  }

  get maxlengthInfo() {
    return this.getAttributeOrDefault('maxlength-info');
  }
  set maxlengthInfo(value) {
    this.setAttributeIfValue('maxlength-info', value);
  }

  get currentSize() {
    const size = this.getAttribute('size');
    return ['sm', 'md', 'lg', 'xl', 'multi'].includes(size) ? size : 'md';
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
