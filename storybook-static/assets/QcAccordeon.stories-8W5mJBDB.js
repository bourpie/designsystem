class p extends HTMLElement{constructor(){super(),this.toggleButton=this.querySelector(".accordion-toggle"),this.content=this.toggleButton.nextElementSibling,this.toggleButton.setAttribute("aria-expanded","false"),this.content.setAttribute("aria-hidden","true"),this.content.style.display="none",this.toggleButton.addEventListener("click",()=>this.toggleContent())}toggleContent(){const e=this.toggleButton.getAttribute("aria-expanded")==="true";e||this.closeAllAccordions(),this.toggleButton.setAttribute("aria-expanded",!e),this.content.setAttribute("aria-hidden",e),e?this.content.style.display="none":this.content.style.display="block"}closeAllAccordions(){document.querySelectorAll("qc-accordeon").forEach(m=>{const r=m.querySelector(".accordion-toggle"),c=r.nextElementSibling;r.setAttribute("aria-expanded","false"),c.setAttribute("aria-hidden","true"),c.style.display="none";const s=r.querySelector(".lnr");s.classList.remove("lnr-chevron-up"),s.classList.add("lnr-chevron-down")})}}customElements.get("qc-accordeon")||customElements.define("qc-accordeon",p);const h={title:"Composants/QcAccordeon",component:p,argTypes:{titre:{control:"text"},texte:{control:"text"}},render:({...t})=>`
<qc-accordeon>
    <button class="accordion-toggle">
        ${t.titre?t.titre:"Titre du bouton"} <span class="icon lnr lnr-chevron-down"></span> 
    </button>
    <div>
    ${t.texte?t.texte:`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
    `}
    </div>
</qc-accordeon>
    `},o={args:{titre:"Titre du bouton",texte:"Texte du contenu de l'accordéon"},decorators:[t=>t()]},n={args:{titre:"Rechercher un produit"},decorators:[t=>`
              <nav>
                  ${t()}
                  ${t()}
              </nav>
          `]};var i,a,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    titre: "Titre du bouton",
    texte: "Texte du contenu de l'accordéon"
  },
  decorators: [Story => Story()]
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var l,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    titre: "Rechercher un produit"
  },
  decorators: [Story => \`
              <nav>
                  \${Story()}
                  \${Story()}
              </nav>
          \`]
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const b=["Primary","Navigation"],y=Object.freeze(Object.defineProperty({__proto__:null,Navigation:n,Primary:o,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{y as A};
