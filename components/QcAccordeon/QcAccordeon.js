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

    if (!isExpanded) {
      this.closeAllAccordions();
    }

    this.toggleButton.setAttribute('aria-expanded', !isExpanded);
    this.content.setAttribute('aria-hidden', isExpanded);

    if (isExpanded) {
      this.content.style.display = 'none';
    } else {
      this.content.style.display = 'block';
    }

  }

  closeAllAccordions() {
    const accordions = document.querySelectorAll('qc-accordeon');
    accordions.forEach((accordion) => {
      const button = accordion.querySelector('.accordion-toggle');
      const content = button.nextElementSibling;

      button.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
      content.style.display = 'none';

      const icon = button.querySelector('.lnr');
      icon.classList.remove('lnr-chevron-up');
      icon.classList.add('lnr-chevron-down');
    });
  }

}

customElements.get('qc-accordeon') || customElements.define('qc-accordeon', QcAccordeon);

export { QcAccordeon };
