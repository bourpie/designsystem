import { QcBouton } from '/components/QcBouton/QcBouton.js';

class WcCounter extends HTMLElement {
  constructor(){
    super();

    this.count = 0;

    this.innerHTML = `
      <form>
        <qc-bouton label="Decrement" class="decrement"></qc-bouton>
        <div aria-live="polite" counter-result>0</div>
        <qc-bouton label="Increment" class="increment"></qc-bouton>
      </form>
      <style>
        form {  
          display: flex;
          gap: 2rem;
          align-items: center;
          justify-content: center;
        }
        [counter-result] {
          font-size: 1.5rem;
          font-weight: bold;
          border: 1px solid black;
          border-radius: 5px;
          padding: 0.25rem 1rem;
        }
      </style>
    `;

    this.decrement = this.querySelector('.decrement');
    this.increment = this.querySelector('.increment');
    this.result = this.querySelector('[counter-result]');

    this.decrement.addEventListener('click', this);
    this.increment.addEventListener('click', this);
  }

  handleEvent(event) {
    this[`on${event.type}`](event);
  }

  onclick(event) {
    event.preventDefault();

    if(event.target.classList.contains('increment')) {
      this.count++;
    }
    if(event.target.classList.contains('decrement')) {
      this.count--;
    }

    this.result.textContent = this.count;
  }
}

customElements.define('wc-counter', WcCounter);

export { WcCounter };
