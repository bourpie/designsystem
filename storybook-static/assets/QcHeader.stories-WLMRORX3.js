import"./QcRecherche-fHsOTiIx.js";const v=""+new URL("logo-quebec-DF2QDCh_.svg",import.meta.url).href,q="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.67%2052.21'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3eFichier%201%3c/title%3e%3cg%20id='Calque_2'%20data-name='Calque%202'%3e%3cg%20id='Calque_1-2'%20data-name='Calque%201'%3e%3cpath%20class='cls-1'%20d='M52.67,47.81l-15-15a20.77,20.77,0,1,0-4.32,4.46L48.28,52.21ZM20.78,35.36A14.41,14.41,0,1,1,35.19,21h0A14.43,14.43,0,0,1,20.78,35.36Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";class g extends HTMLElement{static get observedAttributes(){return["titre","class","btnlabel","contacturl","contactlabel","recherche","langueurl","languelabel","action","name","query","placeholder"]}constructor(){super(),this.render()}attributeChangedCallback(t,r,c){r!==c&&this.render()}get template(){return`
            <header class="bg-bleu-piv">
                <div class="container">
                    <div class="piv">
                        <a class="qc-logo" href="https://quebec.ca/" aria-label="Québec.ca">
                            <img src="${v}" alt="Québec.ca" width="200" height="72" />
                        </a>
                        <p><a href="/">${this.titre}</a></p>
                    </div>
                    <nav>
                        <button aria-label="${this.btnlabel}" class="btn-search">
                            <img src="${q}" alt="Rechercher" width="24" height="24" />
                        </button>
                        <ul ${this.langueurl?'class="langue"':""}>
                            ${this.langueurl?`<li><a href="${this.langueurl}">${this.languelabel}</a></li>`:""}
                            <li><a href="${this.contacturl}">${this.contactlabel}</a></li>
                        </ul>
                    </nav>
                </div>
                ${this.recherche==="oui"?`<qc-recherche variant="dark" placeholder="${this.placeholder}" action="${this.action}" name="${this.name}" value="${this.query}"></qc-recherche>`:""}
            </header>
        `}get titre(){return this.getAttribute("titre")||"Titre du site"}get btnlabel(){return this.getAttribute("btnlabel")||"Rechercher"}get contacturl(){return this.getAttribute("contacturl")||"/"}get contactlabel(){return this.getAttribute("contactlabel")||"Nous joindre"}get recherche(){return this.getAttribute("recherche")||"non"}set recherche(t){this.setAttribute("recherche",t)}get langueurl(){return this.getAttribute("langueurl")}get languelabel(){return this.getAttribute("languelabel")||"English"}get placeholder(){return this.getAttribute("placeholder")}get action(){const t=document.documentElement.lang||"fr";return`${this.getAttribute("action")||"/"}?lang=${t}`}get name(){return this.getAttribute("name")||"search"}get query(){return this.getAttribute("query")||""}render(){this.innerHTML=this.template;const t=this.querySelector(".btn-search");if(t&&t.addEventListener("click",()=>{this.recherche=this.recherche==="oui"?"non":"oui",this.render(),this.updateSearchAction()}),this.recherche==="oui"){const r=this.querySelector("qc-recherche");if(r){r.setAttribute("action",this.action),r.setAttribute("name",this.name),r.setAttribute("value",this.query);const c=r.querySelector("input");c&&c.focus()}}}updateSearchAction(){const t=this.querySelector("qc-recherche");t&&(t.setAttribute("action",this.action),t.setAttribute("name",this.name),t.setAttribute("value",this.query))}}customElements.get("qc-header")||customElements.define("qc-header",g);const f={title:"Modèles/QcHeader",component:g,argTypes:{titre:{control:"text",description:"Titre du site"},btnlabel:{control:"text",description:"Libellé du bouton de recherche pour les utilisateurs de lecteur d'écran."},contacturl:{control:"text",description:"URL de la page de contact"},contactlabel:{control:"text",description:"Libellé du lien vers la page de contact"},action:{control:"text",description:"URL de destination de la recherche."},name:{control:"text",description:"Nom de l'input pour la recherche."},query:{control:"text",description:"Valeur initiale du champ de recherche."},placeholder:{control:"text",description:"Placeholder du champ de recherche."}},render:({...e})=>`
          <qc-header
            ${e.titre?`titre="${e.titre}"`:""}
            ${e.btnlabel?`btnlabel="${e.btnlabel}"`:""}
            ${e.contacturl?`contacturl="${e.contacturl}"`:""}
            ${e.contactlabel?`contactlabel="${e.contactlabel}"`:""}
            ${e.action?`action="${e.action}"`:""}
            ${e.langueurl?`langueurl="${e.langueurl}"`:""}
            ${e.name?`name="${e.name}"`:""}
            ${e.query?`query="${e.query}"`:""}
            ${e.placeholder?`query="${e.placeholder}"`:""}
          >
          </qc-header>`},i={args:{titre:"Mon site",langueurl:"https://www.quebec.ca/en",name:"search",query:""}},a={args:{titre:"Mon site avec avis",placeholder:"Rechercher un produit",btnlabel:"Rechercher",variant:"dark",name:"search-avis",query:""},decorators:[e=>`
            ${e()}
            <qc-alerte 
                type="avertissement" 
                fermeture="oui" message="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>">
            </qc-alerte>
        `]};a.storyName="Avec une alerte";const n={args:{titre:"Mon site avec navigation",placeholder:"Rechercher un produit",btnlabel:"Rechercher",variant:"dark",name:"search-navigation",query:""},decorators:[e=>`
            ${e()}
            <qc-navigation>
                <ul>
                <li>
                    <a href="#">À propos</a>
                </li>
                <li>
                    <a>Contenu</a>
                </li>
                <li>
                    <a href="#">Design</a>
                </li>
                <li>
                    <a href="#">Ressources</a>
                    <button>
                    <span class="lnr lnr-chevron-down"></span>
                    </button>
                    <ul>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Vidéos</a></li>
                    </ul>
                </li>
                </ul>
            </qc-navigation>
            <qc-alerte 
                type="avertissement" 
                fermeture="oui" message="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>">
            </qc-alerte>
        `]};n.storyName="Avec navigation";var l,s,o;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    titre: "Mon site",
    langueurl: "https://www.quebec.ca/en",
    name: "search",
    query: ""
  }
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var u,h,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    titre: "Mon site avec avis",
    placeholder: "Rechercher un produit",
    btnlabel: "Rechercher",
    variant: "dark",
    name: "search-avis",
    query: ""
  },
  decorators: [Story => \`
            \${Story()}
            <qc-alerte 
                type="avertissement" 
                fermeture="oui" message="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>">
            </qc-alerte>
        \`]
}`,...(d=(h=a.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var m,p,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    titre: "Mon site avec navigation",
    placeholder: "Rechercher un produit",
    btnlabel: "Rechercher",
    variant: "dark",
    name: "search-navigation",
    query: ""
  },
  decorators: [Story => \`
            \${Story()}
            <qc-navigation>
                <ul>
                <li>
                    <a href="#">À propos</a>
                </li>
                <li>
                    <a>Contenu</a>
                </li>
                <li>
                    <a href="#">Design</a>
                </li>
                <li>
                    <a href="#">Ressources</a>
                    <button>
                    <span class="lnr lnr-chevron-down"></span>
                    </button>
                    <ul>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Vidéos</a></li>
                    </ul>
                </li>
                </ul>
            </qc-navigation>
            <qc-alerte 
                type="avertissement" 
                fermeture="oui" message="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>">
            </qc-alerte>
        \`]
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const $=["Default","AvecAvis","AvecNavigation"],A=Object.freeze(Object.defineProperty({__proto__:null,AvecAvis:a,AvecNavigation:n,Default:i,__namedExportsOrder:$,default:f},Symbol.toStringTag,{value:"Module"}));export{i as D,A as H};
