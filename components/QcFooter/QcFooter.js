import './QcFooter.css';
import qclogo from '../../public/piv-pied-page.svg';

class QcFooter extends HTMLElement {
    static get observedAttributes() {
        return ['mainlinks', 'centerlinks', 'copyright'];
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

    get mainLinks() {
        try {
            const links = this.getAttribute('mainlinks');
            console.log(links);
            return links ? JSON.parse(links) : [];
        } catch (error) {
            console.error('Error parsing mainlinks JSON:', error);
            return [];
        }
    }

    get centerLinks() {
        try {
            const links = this.getAttribute('centerlinks');
            console.log('centerlinks:', links);
            return links ? JSON.parse(links) : [];
        } catch (error) {
            console.error('Error parsing centerlinks JSON:', error);
            return [];
        }
    }

    get copyright() {
        return this.getAttribute('copyright') || '© 2024 Gouvernement du Québec. Tous droits réservés.';
    }

    get template() {
        // Structure JSON des liens principaux
        const mainLinksData = this.mainLinks.map(column => ({
            title: column.title,
            links: column.links.map(link => ({
                label: link.label,
                href: link.href
            }))
        }));
    
        // Structure JSON des liens centrés
        const centerLinksData = this.centerLinks.map(column => ({
            title: column.title,
            links: column.links.map(link => ({
                label: link.label,
                href: link.href
            }))
        }));
    
        return `
            <footer>
                <section class="section-liens-principaux bg-bleu-dark">
                    <div class="container">
                        <div class="row">                            
                            ${mainLinksData.map(section => `
                                <div class="col-12 col-md-6 col-lg-4">
                                    <nav>
                                        <h3>${section.title}</h3>
                                        <ul>
                                        ${section.links.map(link => ` 
                                            <li><a href="${link.href}">${link.label}</a></li>
                                        `).join('')}
                                        </ul>
                                    </nav>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>

                <section class="section-liens-secondaires">
                    <div class="container">
                        ${centerLinksData.map(section => `
                            <h3 class="visually-hidden">${section.title}</h3>
                            <ul class="row">
                                ${section.links.map(link => `
                                    <li class="col"><a href="${link.href}">${link.label}</a></li>
                                `).join('')}
                            </ul>
                        `).join('')}
                    </div>
                </section>
    
                <section class="section-liens-copyright">
                    <div class="container">
                        <img src="${qclogo}" alt="Logo Québec" width="117" height="35" />
                        <p><a href="#">${this.copyright}</a></p>
                    </div>
                </section>
            </footer>
        `;
    }
    

    render() {
        this.innerHTML = this.template;
    }
}

customElements.get('qc-footer') || customElements.define('qc-footer', QcFooter);

export { QcFooter };
