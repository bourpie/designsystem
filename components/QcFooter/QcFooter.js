import './QcFooter.css';
import qclogo from '../../public/piv-pied-page.svg';

class QcFooter extends HTMLElement {
    static get observedAttributes() {
        return ['site-nom', 'site-url','mainlinks', 'centerlinks', 'copyright'];
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

    get siteName() {
        return this.getAttribute('site-nom') || 'Gouvernement du Québec';
    }

    get siteUrl() {
        return this.getAttribute('site-url') || 'https://www.quebec.ca';
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
                            <div class="col-12">
                                <a class="footer-title" href="${this.siteUrl}">${this.siteName}</a>
                                <h2 class="visually-hidden">Navigation de pied de page de Québec.ca</h2>
                            </div>
                        </div>
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
                        <div class="row">
                            <div class="col-12 d-flex">
                                ${centerLinksData.map(section => `
                                    <h3 class="visually-hidden">${section.title}</h3>
                                    <ul class="list-inline mx-auto justify-content-center">
                                        ${section.links.map(link => `
                                            <li><a href="${link.href}">${link.label}</a></li>
                                        `).join('')}
                                    </ul>
                                `).join('')}
                            </div>
                        </div>
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
