class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.addEventListeners(),this.enhanceAccessibility()}addEventListeners(){this.querySelectorAll("button").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.toggleSubmenu(t)})}),document.addEventListener("click",t=>{const e=this.contains(t.target)||t.target.closest("qc-navigation"),l=t.target.closest("button, a");(!e||e&&!l)&&this.closeAllSubmenus()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.closeAllSubmenus()})}toggleSubmenu(s){const t=s.nextElementSibling;if(t&&t.tagName.toLowerCase()==="ul"){const e=t.classList.toggle("show");s.setAttribute("aria-expanded",e),this.updateButtonIcon(s,e)}}updateButtonIcon(s,t){const e=s.querySelector("li button span");t?(e.classList.remove("lnr-chevron-down"),e.classList.add("lnr-chevron-up"),s.setAttribute("aria-label","Réduire le sous-menu"),s.classList.add("open")):(e.classList.remove("lnr-chevron-up"),e.classList.add("lnr-chevron-down"),s.setAttribute("aria-label","Développer le sous-menu"),s.classList.remove("open"))}closeAllSubmenus(){const s=this.querySelectorAll("ul.show"),t=this.querySelectorAll('button[aria-expanded="true"]');s.forEach(e=>e.classList.remove("show")),t.forEach(e=>{e.setAttribute("aria-expanded","false"),this.updateButtonIcon(e,!1)})}enhanceAccessibility(){const s=this.shadowRoot.querySelector("nav"),t=this.querySelectorAll("ul");s.setAttribute("role","navigation"),s.setAttribute("aria-label","Navigation principale"),t.forEach((e,l)=>{e.setAttribute("role","menubar");const h=e.children;Array.from(h).forEach((i,v)=>{i.setAttribute("role","none");const o=i.querySelector("a"),n=i.querySelector("button"),r=i.querySelector("ul");o&&o.setAttribute("role","menuitem"),n&&(n.classList.add("submenu-toggle"),n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-label","Développer le sous-menu"),n.nextElementSibling.setAttribute("role","menu")),r&&(r.classList.add("submenu"),r.setAttribute("aria-label",`Sous-menu ${o?o.textContent.trim():"sans titre"}`))})})}render(){const s=`
            :host {
                display: block;
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
        `;this.shadowRoot.innerHTML=`
            <style>${s}</style>
            <nav>
                <div class="container">
                    <div class="row">
                        <slot></slot>
                    </div>
                </div>
            </nav>
        `}}customElements.get("qc-navigation")||customElements.define("qc-navigation",m);const p={title:"Composants/QcNavigation",component:m,render(){return`<qc-navigation>
      <ul>
        <li>
          <a aria-current="page" href="#">À propos</a>
        </li>
        <li>
          <a href="#">Contenu</a>
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
    </qc-navigation>`}},a={};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const g=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{f as N};
