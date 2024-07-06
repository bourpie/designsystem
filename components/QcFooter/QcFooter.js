import qclogo from '../../assets/piv-pied-page.svg';

class QcFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['site-nom', 'site-url', 'mainlinks', 'centerlinks', 'copyright'];
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
      return links ? JSON.parse(links) : [];
    } catch (error) {
      console.error('Error parsing mainlinks JSON:', error);
      return [];
    }
  }

  get centerLinks() {
    try {
      const links = this.getAttribute('centerlinks');
      return links ? JSON.parse(links) : [];
    } catch (error) {
      console.error('Error parsing centerlinks JSON:', error);
      return [];
    }
  }

  get copyright() {
    return this.getAttribute('copyright') || '© 2024 Gouvernement du Québec. Tous droits réservés.';
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
       
        
        :host {
          --main-background-color: #223654;
          --link-color: #095797;;
          --link-color-dark: white;
          --link-color-hover: #3374cc;
          display: block;
        }


        .visually-hidden {
          position: absolute;
          overflow: hidden;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          border: 0;
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
            flex-wrap: wrap;
        }

        @media (min-width: 768px) {
            .col-md-6 {
                flex: 0 0 50%;
                max-width: 50%;
            }
        }

        @media (min-width: 992px) {
            .col-lg-4 {
                flex: 0 0 33.33333333%;
                max-width: 33.33333333%;
            }
        }


        h3 {
          color: white;
          font-family: "Open Sans", sans-serif;
          padding-bottom: 0;
          margin-top: 40px;
          margin-bottom: 8px;
          font-size: 1rem;
          font-weight: 700;
        }

        ul {
          list-style: none;
          padding: 0 5px 0 0;
          margin: 0;
        }

        a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        .section-liens-principaux {
          
          background-color: var(--main-background-color);
          padding: 56px 0;
          color: var(--link-color-dark);

          li a {
            
            color: var(--link-color-dark);
            font-size: 0.875rem;
            }
        }

        a.footer-title {
          font-family: "Roboto", sans-serif;
          display: block;
          font-size: 1.5rem;
          font-weight: 500;
          text-decoration: none;
          color: var(--link-color-dark);
        }

        a.footer-title:hover {
          text-decoration: underline;
        }

        .section-liens-secondaires {
          padding-top: 40px;
          padding-bottom: 12px;
          text-align: center;

          a {
            color: var(--link-color);
            font-size: 0.875rem;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }

            a:hover, a:focus {
                color: var(--link-color-hover);
            }
          }

          .row {
            justify-content: center;
          }
        }

        .section-liens-secondaires li {
          display: inline-block;
          text-align: center;
          padding: 0 15px 10px;
          color: var(--link-color);
        }

        .section-liens-copyright {
          padding: 0 0 2rem 0;
          text-align: center;

           p {
            margin: 0;
           }

            a {
                line-height: 0.8rem;
                white-space: nowrap;
                font-size: 0.875rem;
                text-decoration: none;
                color: var(--link-color);

                &:hover {
                    text-decoration: underline;
                    color: var(--link-hover-color);
                }
            }
        }

        .section-liens-copyright a {
          line-height: 0.8rem;
          white-space: nowrap;
          font-size: 0.875rem;
          text-decoration: none;
          color: var(--link-color);

          &:hover {
                text-decoration: underline;
                color: var(--link-hover-color);
            }
        }

      </style>

      <footer>
        <section class="section-liens-principaux">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a class="footer-title" href="${this.siteUrl}">${this.siteName}</a>
                        <h2 class="visually-hidden">Navigation de pied de page de Québec.ca</h2>
                    </div>
                </div>
                <div class="row">
                ${this.mainLinks.map((section, index) => `
                    
                        <div class="col col-md-6 col-lg-4">
                            <nav>
                                <h3>${section.title}</h3>
                                <ul>
                                ${section.links.map(link => `
                                    <li><a href="${link.href}">${link.label}</a></li>
                                `).join('')}
                                </ul>
                            </nav>
                            ${index === 2 ? `<slot></slot>` : ''}
                        </div>
                    
                `).join('')}
                </div>
            </div>
        </section>

        <section class="section-liens-secondaires">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex">
                ${this.centerLinks.map(section => `
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
}

customElements.get('qc-footer') || customElements.define('qc-footer', QcFooter);

export { QcFooter };
