import './QcAccordeon.css'

class QcAccordeon extends HTMLElement {
  constructor() {
    super();
    this.toggleButton = this.querySelector('.accordion-toggle');
    this.content = this.toggleButton.nextElementSibling;
    
    this.toggleButton.setAttribute('aria-expanded', 'false');
    this.content.setAttribute('aria-hidden', 'true');
    this.content.style.display = 'none'; // Hide content by default

    this.toggleButton.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    const isExpanded = this.toggleButton.getAttribute('aria-expanded') === 'true';
    this.toggleButton.setAttribute('aria-expanded', !isExpanded);
    this.content.setAttribute('aria-hidden', isExpanded);

    if (isExpanded) {
      this.content.style.display = 'none';
    } else {
      this.content.style.display = 'block';
    }

   // this.updateIcon();
  }

}

customElements.get('qc-accordeon') || customElements.define('qc-accordeon', QcAccordeon);

export { QcAccordeon };
