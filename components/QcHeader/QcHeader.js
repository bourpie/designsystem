import { QcRecherche } from "../QcRecherche/QcRecherche.js";

class QcHeader extends HTMLElement {
    static get observedAttributes() {
        return ['titre', 'class', 'btnlabel', 'contacturl', 'contactlabel', 'recherche', 'langueurl', 'languelabel', 'action'];
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
            <header class="bg-bleu-piv">
                <div class="container">
                    <div class="piv">
                        <a class="qc-logo" href="https://quebec.ca/" aria-label="Québec.ca">
                            <img src="logo-quebec.svg" alt="Québec.ca" width="200" height="72" />
                        </a>
                        <p><a href="/">${this.titre}</a></p>
                    </div>
                    <nav>
                        <button aria-label="${this.btnlabel}" class="btn-search">
                            <img src="loupe-piv-droite.svg" alt="Rechercher" width="24" height="24" />
                        </button>
                        <ul ${this.langueurl ? `class="langue"` : ''}>
                            ${this.langueurl ? `<li><a href="${this.langueurl}">${this.languelabel}</a></li>` : ''}
                            <li><a href="${this.contacturl}">${this.contactlabel}</a></li>
                        </ul>
                    </nav>
                </div>
                ${this.recherche === 'oui' ? `<qc-recherche variant="dark" action="${this.action}"></qc-recherche>` : ''}
            </header>
        `;
    }

    get titre() {
        return this.getAttribute('titre') || 'Titre du site';
    }

    get btnlabel() {
        return this.getAttribute('btnlabel') || 'Rechercher';
    }

    get contacturl() {
        return this.getAttribute('contacturl') || '/';
    }

    get contactlabel() {
        return this.getAttribute('contactlabel') || 'Nous joindre';
    }

    get recherche() {
        return this.getAttribute('recherche') || 'non';
    }

    set recherche(value) {
        this.setAttribute('recherche', value);
    }

    get langueurl() {
        return this.getAttribute('langueurl');
    }

    get languelabel() {
        return this.getAttribute('languelabel') || 'English';
    }

    get action() {
        return this.getAttribute('action') || '/';
    }

    render() {
        this.innerHTML = this.template;

        const searchButton = this.querySelector('.btn-search');
        if (searchButton) {
            searchButton.addEventListener('click', () => {
                this.recherche = this.recherche === 'oui' ? 'non' : 'oui';
                this.render();  // Rerender to update the DOM
                this.updateSearchAction();
            });
        }

        if (this.recherche === 'oui') {
            const qcRecherche = this.querySelector('qc-recherche');
            if (qcRecherche) {
                qcRecherche.setAttribute('action', this.action); 
                const input = qcRecherche.querySelector('input');
                if (input) {
                    input.focus();
                }
            }
        }
    }

    updateSearchAction() {
        const qcRecherche = this.querySelector('qc-recherche');
        if (qcRecherche) {
            qcRecherche.setAttribute('action', this.action); 
        }
    }
}

customElements.get('qc-header') || customElements.define('qc-header', QcHeader);

export { QcHeader }