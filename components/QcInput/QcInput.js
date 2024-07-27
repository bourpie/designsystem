import generateUUID from '../../helpers/generateUUID.js';
import './QcInput.css';

class QcInput extends HTMLElement {
    static get observedAttributes() {
        return ['class', 'type', 'size', 'placeholder', 'label', 'aide', 'value', 'disabled', 'required', 'errorMsg', 'error'];
    }

    constructor() {
        super();
        this.render();
    }

    get template() {
        const inputId = `input-${generateUUID()}`;
        const inputClass = this.currentSize ? `input-${this.currentSize}` : '';
        const aideId = `${inputId}-aide`;
        const errorId = `${inputId}-error`;
        const errorClass = this.error ? 'input-error' : '';

        const inputField = this.currentSize === 'multi' 
            ? `<textarea 
                name="${inputId}" 
                id="${inputId}" 
                placeholder="${this.placeholder}"
                maxlength="500"
                class="input ${inputClass} ${errorClass}"
                ${this.disabled ? 'disabled' : ''}
                ${this.required ? 'required' : ''}
                aria-describedby="${this.aide ? aideId : ''} ${this.error ? errorId : ''}"
              >${this.value}</textarea><div class="input-info" id="${aideId}">
              <small>Maximum de 500 caractères</small></div>`
            : `<input 
                type="${this.type}" 
                name="${inputId}" 
                id="${inputId}" 
                placeholder="${this.placeholder}"
                class="input ${inputClass} ${errorClass}"
                value="${this.value}"
                ${this.disabled ? 'disabled' : ''}
                ${this.required ? 'required' : ''}
                aria-describedby="${this.aide ? aideId : ''} ${this.error ? errorId : ''}"
              >`;

        return `
        <div class="form-group ${this.error ? 'has-error' : ''} ${this.disabled ? 'is-disabled' : ''}">
            <label for="${inputId}">${this.label}</label> 
            ${this.aide ? `<div class="input-aide" id="${aideId}">${this.aide}</div>` : `<div id="${aideId}" class="visually-hidden"></div>`}
            ${inputField}
            ${this.error ? `<div class="error-message" id="${errorId}" aria-live="polite">${this.errorMsg}</div>` : `<div id="${errorId}" class="visually-hidden"></div>`}
        </div>
        `;
    }

    get placeholder() {
        return this.getAttribute('placeholder') || '';
    }

    get label() {
        return this.getAttribute('label') || 'Mon champ';
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

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        this.innerHTML = this.template;
    }
}

customElements.get('qc-input') || customElements.define('qc-input', QcInput);

export { QcInput };
