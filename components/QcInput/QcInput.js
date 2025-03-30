const sharedStyles = new CSSStyleSheet();
sharedStyles.replaceSync(`
   :host {
       display: block;
       position: relative;
       line-height: 1.5rem;
       font-size: var(--qc-font-size, 1rem);
   }

   label {
       display: block;
       color: var(--qc-bleu-fonce, #223654);
       font-weight: bold;
       font-size: 1rem;
   }

   .has-error.required label:after {
       content: '*';
       color: var(--qc-rouge, #CB381F);
       font-size: 1rem;
       font-weight: bold;
       margin-left: .5rem;
   }

   textarea.input {
       padding: .5rem;
   }

   .input {
       padding: 0 .5rem;
       margin: .25rem 0;
       border: 1px solid var(--qc-gris-moyen, #6B778A);
       color: var(--qc-bleu-fonce, #223654);
       height: 2.5rem;
   }

   .input::placeholder {
       color: var(--qc-gris-moyen, #6B778A);
       font-size: 1rem;
   }

   .input:focus {
       outline: 2px solid var(--qc-bleu-clair, #4A98D9);
       border: 2px solid var(--qc-bleu-fonce, #223654);
   }

   .input.input-sm {
       width: 100%;
       max-width: 3.875rem; /* Champs petit (jusqu’à 5 caractères) - 63px */
   }

   .input.input-md {
       width: 100%;
       max-width: 9.75rem; /* Champs moyen (jusqu’à 16 caractères) - 156px */
   }

   .input.input-lg {
       width: 100%;
       max-width: 15.625rem; /* Champs large (jusqu’à 26 caractères) - 250px */
   }

   .input.input-xl {
       width: 100%;
       max-width: 33rem; /* Champs extra-large (jusqu’à 58 caractères) - 528px */
   }

   .input.input-multi {
       width: 33rem;
       min-height: 126px;
       margin-bottom: 0;
       resize: vertical;
   }

   .has-error .input {
       border-color: var(--qc-rouge, #CB381F);
       border-width: 2px;
   }

   .input-aide {
       font-size: 0.875rem;
       color: var(--qc-bleu-fonce, #223654);
   }

   .input-info-container {
       display: flex;
   }

   .maxLength-info {
       font-size: 14px;
       line-height: 20px;
   }

   .input-info {
       margin: 0;
       position: absolute;
       right: 0;
       bottom: -0.875rem;
   }

   .error-message {
       color: var(--qc-rouge, #CB381F);
       font-weight: var(--qc-font-weight-semi-bold, 600);
   }

   .champ-requis {
       color: var(--qc-rouge);
       font-size: 1rem;
       font-weight: var(--qc-font-weight-semi-bold, 600);
       margin-left: .5rem;
   }

   [disabled] {
       background-color: var(--qc-gris-pale, #F1F1F2);
       color: var(--qc-gris-moyen, #6B778A);
       border: 1px solid var(--qc-gris-moyen, #6B778A);
   }

   .input-info-container {
       display: flex;
       width: 34rem;
   }

   .maxLength-info {
       color: var(--qc-bleu-fonce, #223654);
       flex: 1 0 50%;
       font-size: 14px;
       line-height: 20px;
       text-align: right;
   }
`);

class QcInput extends HTMLElement {
    static get observedAttributes() {
        return ['id', 'label', 'placeholder', 'class', 'value', 'required', 'disabled',
            'name', 'size', 'aide', 'error', 'errorMsg', 'maxLength', 'maxlengthTxt', 'type'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this._maxLength = this.getAttribute('maxLength') || '500';
        this._maxlengthTxt = this.getAttribute('maxlengthTxt') || 'Maximum {count} caractères';
        this.renderInput();
    }

    isMultiline() {
        return this.getAttribute('size') === 'multi';
    }

    renderInput() {
        const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });
        shadow.innerHTML = '';
        shadow.adoptedStyleSheets = [sharedStyles];

        const id = this.getAttribute('id') || `input-${Math.random().toString(36).substr(2, 9)}`;
        const aideId = `${id}-aide`;
        const errorId = `${id}-error`;
        const size = this.getAttribute('size') || 'md';
        const hasError = this.getAttribute('error') === 'true';
        const errorMsg = this.getAttribute('errorMsg');
        const aide = this.getAttribute('aide');
        const isDisabled = this.hasAttribute('disabled');
        const inputType = this.getAttribute('type') || 'text'; // Récupérer le type d'input

        const template = document.createElement('template');
        template.innerHTML = `
       <div class="form-group ${hasError ? 'has-error' : ''} ${isDisabled ? 'is-disabled' : ''}">
           <label for="${id}" class="form-label"></label>
           ${aide ? `<div class="input-aide" id="${aideId}">${aide}</div>` : ''}
           ${this.isMultiline() ? `
               <textarea class="input input-multi input-${size}" id="${id}" maxlength="${this._maxLength}"></textarea>
               <div class="input-info-container">
                ${hasError ? `
                    <div class="error-message" id="${errorId}" aria-live="polite">${errorMsg}</div>
                    ` : ''}
                   <span class="maxLength-info">
                       ${this.formatMaxLengthText(this._maxlengthTxt, this._maxLength)}
                   </span>
               </div>
           ` : `
            
           <input type="${inputType}" class="input input-${size}" id="${id}">
           
           ${hasError ? `
                <div class="error-message" id="${errorId}" aria-live="polite">${errorMsg}</div>
            ` : ''}
           
           `
        }

       </div>
       `;

        shadow.appendChild(template.content.cloneNode(true));

        this.labelElement = shadow.querySelector('.form-label');
        this.inputElement = shadow.querySelector('.input');
        this.formGroupElement = shadow.querySelector('.form-group');

        this.initializeAttributes();
        this.setupEventListeners();
    }

    initializeAttributes() {

        console.log('[QcInput] initializeAttributes: Initializing...');

        const attributes = {
            required: this.hasAttribute('required'),
            disabled: this.hasAttribute('disabled'),
            name: this.getAttribute('name') || '',
            label: this.getAttribute('label') || '',
            placeholder: this.getAttribute('placeholder') || '',
            value: this.getAttribute('value') || '',
            class: this.getAttribute('class') || ''
        };

        if (attributes.required) {
            this.inputElement.required = true;
            this.formGroupElement.classList.add('required');
        } else {
            this.formGroupElement.classList.remove('required');
        }

        if (attributes.disabled) this.inputElement.disabled = true;
        if (attributes.name) this.inputElement.name = attributes.name;
        if (attributes.label) this.labelElement.textContent = attributes.label;
        if (attributes.placeholder) this.inputElement.placeholder = attributes.placeholder;
        if (attributes.value) {
            this.inputElement.value = attributes.value;
            if (this.isMultiline()) {
                this.updateCharacterCount();
            }
        }
        if (attributes.class) this.formGroupElement.className = `form-control ${attributes.class}`;


        // Log après avoir potentiellement défini la valeur initiale
        if (attributes.value) {
             console.log('[QcInput] initializeAttributes: Initial value set from attribute:', attributes.value);
        }
    }

    setupEventListeners() {

        // Log avant d'ajouter l'écouteur
        console.log('[QcInput] setupEventListeners: Attaching input listener to:', this.inputElement);

        this.inputElement.addEventListener('input', this.handleInputChange.bind(this));
        if (this.isMultiline()) {
            this.inputElement.addEventListener('input', this.updateCharacterCount.bind(this));
        }
    }

    updateCharacterCount() {
        const maxLength = parseInt(this._maxLength);
        const remaining = maxLength - this.inputElement.value.length;
        const counter = this.shadowRoot.querySelector('.maxLength-info');
        if (counter) {
            counter.textContent = this.formatMaxLengthText(this._maxlengthTxt, remaining);
        }
    }

    formatMaxLengthText(template, maxLength) {
        const defaultTemplate = `${maxLength} caractères restants`;
        return template ? template.replace('{count}', maxLength) : defaultTemplate;
    }

    handleInputChange(event) {

        // Log dès l'entrée dans le handler
        console.log('[QcInput] handleInputChange: Event triggered! Internal input value:', event.target.value);

        // Log avant de dispatcher l'événement
        console.log('[QcInput] handleInputChange: Dispatching "input" event from qc-input element.');

        this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.inputElement) return;

        if (name === 'maxLength') this._maxLength = newValue || '500';
        if (name === 'maxlengthTxt') this._maxlengthTxt = newValue || '{count} caractères restants';

        if (name === 'size' || name === 'error' || name === 'errorMsg' || name === 'type') {
            this.renderInput();
            return;
        }

        const attributeHandlers = {
            label: () => this.labelElement.textContent = newValue,
            placeholder: () => this.inputElement.placeholder = newValue,
            class: () => {
                if (newValue) {
                    this.formGroupElement.className = `form-group ${newValue}`;
                } else {
                    this.formGroupElement.className = 'form-group';
                }
            },
            value: () => {
                this.inputElement.value = newValue;
                if (this.isMultiline()) {
                    this.updateCharacterCount();
                }
            },
            required: () => {
                this.inputElement.required = newValue !== null;
                if (newValue !== null) {
                    this.formGroupElement.classList.add('required');
                } else {
                    this.formGroupElement.classList.remove('required');
                }
            },
            disabled: () => this.inputElement.disabled = newValue !== null,
            name: () => this.inputElement.name = newValue || '',
            id: () => {
                this.inputElement.id = newValue;
                this.labelElement.setAttribute('for', newValue);
            },
            maxLength: () => {
                this._maxLength = newValue || '500';
                if (this.isMultiline()) {
                    this.inputElement.maxLength = this._maxLength;
                    const maxLengthInfo = this.shadowRoot.querySelector('.maxLength-info');
                    if (maxLengthInfo) {
                        maxLengthInfo.textContent = this.formatMaxLengthText(this._maxlengthTxt, this._maxLength);
                    }
                }
            },
            maxlengthTxt: () => {
                this._maxlengthTxt = newValue || '{count} caractères restants';
                if (this.isMultiline()) {
                    const maxLengthInfo = this.shadowRoot.querySelector('.maxLength-info');
                    if (maxLengthInfo) {
                        maxLengthInfo.textContent = this.formatMaxLengthText(this._maxlengthTxt, this._maxLength);
                    }
                }
            },
            type: () => {
                // Si l'input n'est pas un textarea, on peut changer son type directement
                if (!this.isMultiline()) {
                    this.inputElement.type = newValue || 'text';
                }
            }
        };

        if (attributeHandlers[name]) {
            attributeHandlers[name]();
        }
    }

    get value() {
        const val = this.inputElement?.value;
        console.log('[QcInput] get value(): Returning ->', val);
        return val;
    }

    set value(newValue) {
        console.log('[QcInput] set value(): Received ->', newValue);
        if (this.inputElement) {
            this.inputElement.value = newValue;
             console.log('[QcInput] set value(): Internal input value set to ->', this.inputElement.value);
             // Si la valeur est définie programmatiquement, mettre à jour le compteur si nécessaire
             if (this.isMultiline()) {
                this.updateCharacterCount();
             }
        } else {
             console.error('[QcInput] set value(): ERROR - this.inputElement is not defined!');
        }
    }
}

customElements.define('qc-input', QcInput);

export { QcInput };