import './QcTdm.css';

class QcTdm extends HTMLElement {
    static get observedAttributes() {
        return ['titre'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    constructor() {
        super();
        this.render();
    }

    connectedCallback() {
        this.render();
        this.setupAnchors();
    }

    get template() {
        return `
            <div class="tdm-container">
                <h2 class="h5">${this.titre}</h2>
                <ul class="tdm-list">
                    ${this.generateAnchors()}
                </ul>
            </div>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }

    get titre() {
        return this.getAttribute('titre') || 'Table des matières';
    }

    generateAnchors() {
        const anchors = [];
        const headings = document.querySelectorAll('h2[tdm]');
        
        headings.forEach((heading, index) => {
            const anchorTitle = heading.getAttribute('tdm-titre') || heading.textContent.trim();
            const anchorId = `tdm-anchor-${index}`;
            heading.id = anchorId;
            anchors.push(`<li><a href="#${anchorId}" class="tdm-link">${anchorTitle}</a></li>`);
        });

        return anchors.join('');
    }

    setupAnchors() {
        const links = this.querySelectorAll('.tdm-link');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

customElements.get('qc-tdm') || customElements.define('qc-tdm', QcTdm);

export { QcTdm }
