import"./QcSocial-BhTqBqUE.js";const l=""+new URL("piv-pied-page-DaWGdr3K.svg",import.meta.url).href;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["site-nom","site-url"]}attributeChangedCallback(u,r,a){r!==a&&this.render()}get siteName(){return this.getAttribute("site-nom")||"Gouvernement du Québec"}get siteUrl(){return this.getAttribute("site-url")||"https://www.quebec.ca"}render(){this.shadowRoot.innerHTML=`
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
                    <slot name="liens-principaux"></slot>
                </div>
            </div>
        </section>

        <section class="section-liens-secondaires">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex">
                <slot name="liens-secondaires"></slot>
              </div>
            </div>
          </div>
        </section>

        <section class="section-liens-copyright">
          <div class="container">
            <img src="${l}" alt="Logo Québec" width="117" height="35" />
            <p><slot name="copyright"></slot></p>
          </div>
        </section>
      </footer>
    `}}customElements.get("qc-footer")||customElements.define("qc-footer",s);const c={title:"Modèles/QcFooter",component:s,argTypes:{siteurl:{control:"text",description:"URL du site"},sitenom:{control:"text",description:"Nom du site"}},render:({...e})=>`
      <qc-footer 
          ${e.siteurl?`site-url="${e.siteurl}"`:""}
          ${e.sitenom?`site-nom="${e.sitenom}"`:""}
      >
        <div slot="liens-principaux">
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <qc-social
            titre="Suivez-nous"
            theme="dark"
            medias='[{"icon":"/assets/icons/facebook-dark.svg","url":"https://facebook.com","text":"Facebook"},{"icon":"/assets/icons/twitterX-dark.svg","url":"https://twitter.com","text":"Twitter"},{"icon":"/assets/icons/youtube-dark.svg","url":"https://linkedin.com","text":"LinkedIn"}]'
          >
          </qc-social>
        </div>
        <div slot="liens-secondaires">
          <ul>
            <li><a href="/accessibilite">Accessibilité</a></li>
            <li><a href="/plan-du-site">Plan du site</a></li>
            <li><a href="/acces-information">Accès à l'information</a></li>
            <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
            <li><a href="/conditions-utilisation">Conditions d'utilisation</a></li>
            <li><a href="/a-propos">À propos</a></li>
          </ul>
        </div>
        <div slot="copyright">
        <a href="/droit-auteur">© Gouvernement du Québec,&nbsp;2024</a>
        </div>
      </qc-footer>
    `},i={args:{siteurl:"https://www.quebec.ca",sitenom:"Gouvernement du Québec"}};var t,o,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    siteurl: 'https://www.quebec.ca',
    sitenom: 'Gouvernement du Québec'
  }
}`,...(n=(o=i.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const d=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{p as F};
