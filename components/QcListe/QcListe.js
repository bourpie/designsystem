// Création de la feuille de style partagée
const sharedStyles = new CSSStyleSheet();
sharedStyles.replaceSync(`
  :host {
    display: block;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --qc-bleu-fonce: #223654;
    --qc-gris-moyen: #6B778A;
    --qc-bleu-clair: #4A98D9;
    --qc-rouge: #CB381F;
    --qc-gris-pale: #F1F1F2;
    --qc-font-weight-medium: 500;
    --qc-font-weight-semi-bold: 600;
  }
  
  .label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: bold;
    color: var(--qc-bleu-fonce);
  }
  
  .select-container {
    position: relative;
  }
  
  .select-trigger {
    padding: 0.5rem;
    border: 1px solid var(--qc-gris-moyen);
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 2.5rem;
    color: var(--qc-bleu-fonce);
  }
  
  .select-trigger[aria-disabled="true"] {
    background-color: var(--qc-gris-pale);
    color: var(--qc-gris-moyen);
    cursor: not-allowed;
  }
  
  .select-trigger:focus {
    outline: 2px solid var(--qc-bleu-clair);
    border-color: var(--qc-bleu-fonce);
  }
  
  .dropdown {
    position: absolute;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: white;
    border: 1px solid var(--qc-gris-moyen);
    border-top: none;
    z-index: 10;
    display: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .dropdown.open {
    display: block;
  }
  
  .option {
    padding: 0.5rem;
    cursor: pointer;
  }
  
  .option[aria-disabled="true"] {
    color: var(--qc-gris-moyen);
    cursor: not-allowed;
  }
  
  .option[aria-selected="true"] {
    background-color: var(--qc-bleu-clair);
    color: white;
  }
  
  .option:hover:not([aria-disabled="true"]) {
    background-color: var(--qc-gris-pale);
  }
  
  .arrow {
    border: solid var(--qc-bleu-fonce);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    margin-left: 8px;
  }
  
  .arrow.up {
    transform: rotate(-135deg);
  }
  
  /* Style pour l'option placeholder grisée */
  .placeholder {
    color: var(--qc-gris-moyen);
  }

  /* Visually hidden input pour intégration formulaire */
  .hidden-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* Style pour l'erreur */
  .error-message {
    color: var(--qc-rouge);
    font-weight: var(--qc-font-weight-medium);
    margin-top: 0.25rem;
  }
  
  /* Label required */
  .label.required:after {
    content: ' *';
    color: var(--qc-rouge);
  }
`);

class QcListe extends HTMLElement {
    static get observedAttributes() {
      return ['placeholder', 'disabled', 'value', 'label', 'name', 'required', 'error', 'errorMsg'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.adoptedStyleSheets = [sharedStyles];
      this._options = [];
      this._open = false;
      this._selectedIndex = -1;
      this._value = '';
      this._label = '';
    }
  
    connectedCallback() {
      this._parseOptions();
      this._render();
      this._setupEvents();
    }
  
    disconnectedCallback() {
      this._removeEvents();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue === newValue) return;
      
      switch (name) {
        case 'value':
          this._value = newValue;
          this._updateSelection();
          break;
        case 'label':
          this._label = newValue;
          this._updateLabel();
          break;
        case 'disabled':
          this._updateDisabled();
          break;
        case 'required':
          this._updateRequired();
          break;
        case 'error':
        case 'errorMsg':
          this._render(); // Re-rendre pour ajouter/supprimer le message d'erreur
          break;
        default:
          this._render();
      }
    }
  
    get value() {
      return this._value;
    }
  
    set value(val) {
      this._value = val;
      this.setAttribute('value', val);
      this._updateSelection();
    }
  
    // Analyser les options à partir des slot ou options-attribute
    _parseOptions() {
      // Vérifier si les options sont fournies via un attribut
      const optionsAttr = this.getAttribute('options');
      if (optionsAttr) {
        try {
          this._options = JSON.parse(optionsAttr);
          return;
        } catch (e) {
          console.error('Invalid options format:', e);
        }
      }
      
      // Sinon, obtenir les options à partir des éléments enfants
      const optionElements = Array.from(this.querySelectorAll('option'));
      this._options = optionElements.map(opt => ({
        value: opt.value,
        label: opt.textContent,
        disabled: opt.disabled
      }));
    }
  
    _render() {
      const disabled = this.hasAttribute('disabled');
      const required = this.hasAttribute('required');
      const name = this.getAttribute('name') || '';
      this._label = this.getAttribute('label') || '';
      const placeholder = this.getAttribute('placeholder') || 'Sélectionner';
      const hasError = this.hasAttribute('error');
      const errorMsg = this.getAttribute('errorMsg') || 'Ce champ contient une erreur';
      
      // Trouver l'option sélectionnée
      const selectedOption = this._options.find(opt => opt.value === this._value);
      
      this.shadowRoot.innerHTML = `
        <label id="label-${this._uniqueId}" class="label ${required ? 'required' : ''}">${this._label}</label>
        
        <div class="select-container">
          <input type="hidden" name="${name}" value="${this._value}" class="hidden-input" />
          
          <div class="select-trigger" 
               role="combobox"
               aria-labelledby="label-${this._uniqueId}"
               aria-haspopup="listbox"
               aria-expanded="${this._open}"
               aria-disabled="${disabled}"
               tabindex="${disabled ? '-1' : '0'}">
            <span class="${!selectedOption ? 'placeholder' : ''}">
              ${selectedOption ? selectedOption.label : placeholder}
            </span>
            <span class="arrow ${this._open ? 'up' : ''}"></span>
          </div>
          
          <div class="dropdown" role="listbox" aria-labelledby="label-${this._uniqueId}">
            ${this._options.map((option, index) => `
              <div class="option" 
                   role="option" 
                   data-value="${option.value}"
                   aria-selected="${option.value === this._value}"
                   aria-disabled="${option.disabled || false}"
                   tabindex="${option.disabled ? '-1' : '0'}">
                ${option.label}
              </div>
            `).join('')}
          </div>
        </div>
        
        ${hasError ? `<div class="error-message">${errorMsg}</div>` : ''}
      `;
      
      this._uniqueId = this._uniqueId || Math.random().toString(36).substring(2, 9);
    }
  
    _setupEvents() {
      this._clickOutsideHandler = this._handleClickOutside.bind(this);
      document.addEventListener('click', this._clickOutsideHandler);
      
      const trigger = this.shadowRoot.querySelector('.select-trigger');
      if (trigger) {
        trigger.addEventListener('click', this._handleTriggerClick.bind(this));
        trigger.addEventListener('keydown', this._handleTriggerKeydown.bind(this));
      }
      
      const options = this.shadowRoot.querySelectorAll('.option');
      options.forEach(option => {
        option.addEventListener('click', this._handleOptionClick.bind(this));
        option.addEventListener('keydown', this._handleOptionKeydown.bind(this));
      });
    }
    
    _removeEvents() {
      document.removeEventListener('click', this._clickOutsideHandler);
    }
    
    _handleClickOutside(event) {
      const path = event.composedPath();
      if (!path.includes(this) && this._open) {
        this._toggleDropdown(false);
      }
    }
    
    _handleTriggerClick(event) {
      if (this.hasAttribute('disabled')) return;
      event.stopPropagation();
      this._toggleDropdown(!this._open);
    }
    
    _handleTriggerKeydown(event) {
      if (this.hasAttribute('disabled')) return;
      
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          this._toggleDropdown(!this._open);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!this._open) {
            this._toggleDropdown(true);
          } else {
            this._focusNextOption();
          }
          break;
        case 'Escape':
          if (this._open) {
            event.preventDefault();
            this._toggleDropdown(false);
          }
          break;
      }
    }
    
    _handleOptionClick(event) {
      const option = event.target.closest('.option');
      if (!option) return;
      
      const disabled = option.getAttribute('aria-disabled') === 'true';
      if (disabled) return;
      
      // Utiliser stopPropagation pour éviter que l'événement remonte et déclenche handleClickOutside
      event.stopPropagation();
      
      const value = option.dataset.value;
      this._selectOption(value, option.textContent);
    }
    
    _handleOptionKeydown(event) {
      const option = event.currentTarget;
      const disabled = option.getAttribute('aria-disabled') === 'true';
      if (disabled) return;
      
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          const value = option.dataset.value;
          this._selectOption(value, option.textContent);
          break;
        case 'ArrowDown':
          event.preventDefault();
          this._focusNextOption(option);
          break;
        case 'ArrowUp':
          event.preventDefault();
          this._focusPreviousOption(option);
          break;
        case 'Escape':
          event.preventDefault();
          this._toggleDropdown(false);
          this.shadowRoot.querySelector('.select-trigger').focus();
          break;
      }
    }
    
    _toggleDropdown(open) {
      this._open = open;
      
      const dropdown = this.shadowRoot.querySelector('.dropdown');
      const trigger = this.shadowRoot.querySelector('.select-trigger');
      const arrow = this.shadowRoot.querySelector('.arrow');
      
      if (open) {
        dropdown.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        arrow.classList.add('up');
        
        // Mettre en évidence l'option sélectionnée et la faire défiler à la vue
        const selectedOption = this.shadowRoot.querySelector('.option[aria-selected="true"]');
        if (selectedOption) {
          setTimeout(() => {
            selectedOption.scrollIntoView({ block: 'nearest' });
          }, 0);
        }
      } else {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        arrow.classList.remove('up');
      }
    }
    
    _selectOption(value, label) {
      // Utiliser stopImediatePropagation pour arrêter tous les événements liés
      this._skipNextClickOutside = true;
      
      this._value = value;
      this.setAttribute('value', value);
      
      // Mettre à jour l'input caché
      const hiddenInput = this.shadowRoot.querySelector('.hidden-input');
      if (hiddenInput) hiddenInput.value = value;
      
      // Mettre à jour le texte affiché
      const triggerText = this.shadowRoot.querySelector('.select-trigger span');
      if (triggerText) {
        triggerText.textContent = label;
        triggerText.classList.remove('placeholder');
      }
      
      // Mettre à jour les états aria-selected
      const options = this.shadowRoot.querySelectorAll('.option');
      options.forEach(option => {
        option.setAttribute('aria-selected', option.dataset.value === value);
      });
      
      // Fermer le menu déroulant
      this._toggleDropdown(false);
      
      // Focus sur le trigger
      this.shadowRoot.querySelector('.select-trigger').focus();
      
      // Émettre les événements pour compatibilité avec formulaires et Vue.js
      this._emitEvents();
    }
    
    _emitEvents() {
      // Pour l'intégration formulaire standard
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
      
      // Pour v-model de Vue.js
      this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
      
      // Événement détaillé
      this.dispatchEvent(new CustomEvent('select', {
        bubbles: true,
        composed: true,
        detail: { 
          value: this._value, 
          selectedOption: this._options.find(opt => opt.value === this._value)
        }
      }));
    }
    
    _focusNextOption(currentOption = null) {
      const options = Array.from(this.shadowRoot.querySelectorAll('.option:not([aria-disabled="true"])'));
      if (!options.length) return;
      
      let index = currentOption ? options.indexOf(currentOption) : -1;
      index = (index + 1) % options.length;
      options[index].focus();
    }
    
    _focusPreviousOption(currentOption) {
      const options = Array.from(this.shadowRoot.querySelectorAll('.option:not([aria-disabled="true"])'));
      if (!options.length) return;
      
      let index = options.indexOf(currentOption);
      index = (index - 1 + options.length) % options.length;
      options[index].focus();
    }
    
    _updateSelection() {
      if (!this.shadowRoot) return;
      
      const selectedOption = this._options.find(opt => opt.value === this._value);
      const triggerText = this.shadowRoot.querySelector('.select-trigger span');
      
      if (selectedOption && triggerText) {
        triggerText.textContent = selectedOption.label;
        triggerText.classList.remove('placeholder');
      } else if (triggerText) {
        triggerText.textContent = this.getAttribute('placeholder') || 'Sélectionner';
        triggerText.classList.add('placeholder');
      }
      
      const options = this.shadowRoot.querySelectorAll('.option');
      options.forEach(option => {
        option.setAttribute('aria-selected', option.dataset.value === this._value);
      });
      
      // Mettre à jour l'input caché
      const hiddenInput = this.shadowRoot.querySelector('.hidden-input');
      if (hiddenInput) hiddenInput.value = this._value;
    }
    
    _updateLabel() {
      if (!this.shadowRoot) return;
      const label = this.shadowRoot.querySelector('.label');
      if (label) {
        label.textContent = this._label;
        if (this.hasAttribute('required')) {
          label.classList.add('required');
        } else {
          label.classList.remove('required');
        }
      }
    }
    
    _updateDisabled() {
      if (!this.shadowRoot) return;
      const trigger = this.shadowRoot.querySelector('.select-trigger');
      if (trigger) {
        const disabled = this.hasAttribute('disabled');
        trigger.setAttribute('aria-disabled', disabled);
        trigger.tabIndex = disabled ? -1 : 0;
      }
    }
    
    _updateRequired() {
      this._updateLabel();
    }
}
  
// Enregistrer le composant
customElements.get('qc-liste') || customElements.define('qc-liste', QcListe);
  
export { QcListe };