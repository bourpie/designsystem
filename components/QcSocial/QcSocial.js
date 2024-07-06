import "./QcSocial.css"

class QcSocial extends HTMLElement {
    static get observedAttributes() {
        return ['titre', 'medias', 'theme'];
    }

    constructor() {
        super();
        this.render();
    }

    get template() {
        const themeClass = this.theme === 'light' ? 'theme-light' : 'theme-dark';
        const medias = JSON.parse(this.medias || '[]');
        
        const mediaLinks = medias.map(media => `
            <li>
                <a href="${media.url}" target="_blank" rel="noopener noreferrer">
                    <img src="${media.icon}" alt="${media.text} icon">
                    <span class="visually-hidden">${media.text}</span>
                </a>
            </li>
        `).join('');

        return `
            <div class="qc-social ${themeClass}">
                <h3>${this.titre}</h3>
                <ul>
                    ${mediaLinks}
                </ul>
            </div>
        `;
    }

    get titre() {
        return this.getAttribute('titre') || 'Suivez-nous sur les réseaux sociaux';
    }

    get medias() {
        return this.getAttribute('medias');
    }

    get theme() {
        return this.getAttribute('theme') || 'dark';
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        this.innerHTML = this.template;
    }
}

customElements.get('qc-social') || customElements.define('qc-social', QcSocial);

export { QcSocial };
