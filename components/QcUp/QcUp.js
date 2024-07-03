import { QcBouton } from '../QcBouton/QcBouton.js';

import './QcUp.css';

class QcUp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    window.addEventListener('scroll', this.toggleVisibility.bind(this));
    this.querySelector('qc-bouton').addEventListener('click', this.scrollToTop);
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.toggleVisibility.bind(this));
    this.querySelector('qc-bouton').removeEventListener('click', this.scrollToTop);
  }

  render() {
    this.innerHTML = `
      <qc-bouton class="qc-up-btn" label="Défiler vers le haut" icon="lnr-arrow-up" icon-position="left"></qc-bouton>
    `;
  }

  toggleVisibility() {
    const button = this.querySelector('qc-bouton');
    if (window.scrollY > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

customElements.get('qc-up') || customElements.define('qc-up', QcUp);

export { QcUp };
