import './QcEtiquette.css';

class QcEtiquette extends HTMLElement {

  static get observedAttributes() {
    return ['label'];
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
        <div class="qc-tag">
            ${this.tag}
        </div>
    `;
  }

  get label() {
    return this.getAttribute('label') || 'Étiquette';
  }

  render() {
    this.innerHTML = this.template;
  }
}


customElements.get('qc-etiquette') || customElements.define('qc-etiquette', QcEtiquette);

export { QcEtiquette };
