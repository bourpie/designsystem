import qclogo from '../../assets/piv-pied-page.svg';
import './QcFooter.css'


class QcFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['site-nom', 'site-url'];
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

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --main-background-color: #223654;
          --link-color: #095797;
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

        .section-liens-principaux {
          background-color: var(--main-background-color);
          padding: 3rem 0;
          color: var(--link-color-dark);
        }

        a.footer-title {
          font-family: "Roboto", sans-serif;
          display: block;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
          text-decoration: none;
          color: var(--link-color-dark);
        }

        a.footer-title:hover {
          text-decoration: underline;
        }

        .section-liens-copyright {
          padding: 0 0 2rem 0;
          text-align: center;
        }

        .section-liens-copyright p {
          margin: 0;
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
                    <slot name="main-links"></slot>
                </div>
            </div>
        </section>

        <section class="section-liens-secondaires">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex">
                <slot name="center-links"></slot>
              </div>
            </div>
          </div>
        </section>

        <section class="section-liens-copyright">
          <div class="container">
            <img src="${qclogo}" alt="Logo Québec" width="117" height="35" />
            <p><slot name="copyright"></slot></p>
          </div>
        </section>
      </footer>
    `;
  }
}

customElements.get('qc-footer') || customElements.define('qc-footer', QcFooter);

export { QcFooter };
