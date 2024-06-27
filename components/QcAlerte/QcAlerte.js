class QcAlerte extends HTMLElement {
  static get observedAttributes() {
    return ['message'];
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
    return `<div>${this.message}</div>`;

  }

  get message() {
    return this.getAttribute('message') || 'Alerte';
  }

  render() {
    this.innerHTML = this.template;
  }

}

customElements.define('qc-alerte', QcAlerte);

export { QcAlerte };