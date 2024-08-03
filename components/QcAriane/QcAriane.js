import './QcAriane.css'

class QcAriane extends HTMLElement {

    static get observedAttributes() {
        return ['arialabel'];
      }
    
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          this.render();
        }
    }

    render() {
        const styles = `
            :host {
                --margin-top: 1rem;
                display: block;
            }

            nav {
                margin-top: var(--margin-top);
            }
            .container {
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto;
            }
    
            @media (min-width: 1200px) {
                .container {
                    max-width: 1110px;
                }
            }
            .row {
                display: flex;
            }
        `;

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <nav aria-label="${this.ariaLabel}">
                <div class="container">
                    <div class="row">
                        <slot></slot>
                    </div>
                </div>
            </nav>
        `;
    };
};

customElements.get('qc-ariane') || customElements.define('qc-ariane', QcAriane);

export { QcAriane };