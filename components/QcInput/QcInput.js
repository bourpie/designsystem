import generateUUID from '../../helpers/generateUUID.js';
import './QcInput.css';

class QcInput extends HTMLElement {
    static get observedAttributes() {
        return ['class', 'type', 'size', 'placeholder', 'label', 'aide', 'value', 'disabled', 'required', 'errorMsg', 'error', 'maxlength', 'maxlength-info'];
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

        const commonAttributes = this.getCommonAttributes(inputId, inputClass, aideId, errorId, errorClass);

        const inputField = this.currentSize === 'multi' 
            ? `<textarea ${commonAttributes}>${this.value}</textarea>`
            : `<input ${commonAttributes} value="${this.value}">`;

        return `
        <div class="form-group ${this.error ? 'has-error' : ''} ${this.disabled ? 'is-disabled' : ''}">
            <label for="${inputId}">${this.label}</label> 
            ${this.aide ? `<div class="input-aide" id="${aideId}">${this.aide}</div>` : `<div id="${aideId}" class="visually-hidden"></div>`}
            ${inputField}
            <div class="input-info-container">
                ${this.error ? `<small class="error-message" id="${errorId}" aria-live="polite">${this.errorMsg}</small>` : '<small></small>'}   
                ${this.currentSize === 'multi' && this.maxlength ? `<small class="maxlength-info" id="${inputId}-maxlength-info">${this.maxlengthInfo} ${this.maxlength - (this.value.length || 0)}</small>` : '<small></small>'}
            </div>
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
        const inputField = this.querySelector('input, textarea');
        if (inputField) {
            inputField.addEventListener('input', this.updateMaxlengthInfo.bind(this));
        }
    }

    disconnectedCallback() {
        const inputField = this.querySelector('input, textarea');
        if (inputField) {
            inputField.removeEventListener('input', this.updateMaxlengthInfo.bind(this));
        }
    }

    updateMaxlengthInfo(event) {
        const inputField = event.target;
        const maxlengthInfoElement = this.querySelector('.maxlength-info');
        if (maxlengthInfoElement && this.maxlength && this.currentSize === 'multi') {
            maxlengthInfoElement.textContent = ` ${this.maxlengthInfo} ${this.maxlength - inputField.value.length}`;
        }
    }

    render() {
        this.innerHTML = this.template;
        this.connectedCallback();  // Ensure event listeners are added after rendering
    }
}

customElements.get('qc-input') || customElements.define('qc-input', QcInput);

export { QcInput };
