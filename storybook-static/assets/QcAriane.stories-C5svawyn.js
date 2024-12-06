class s extends HTMLElement{static get observedAttributes(){return["arialabel"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(t,o,l){o!==l&&this.render()}render(){const t=`
            :host {
                --margin-top: 1rem;
                display: block;
            }

            nav {
                margin-top: var(--margin-top);
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
            <style>${t}</style>
            <nav aria-label="${this.ariaLabel}">
                <div class="container">
                    <div class="row">
                        <slot></slot>
                    </div>
                </div>
            </nav>
        `}}customElements.get("qc-ariane")||customElements.define("qc-ariane",s);const c={title:"composants/QcAriane",component:s,tags:["autodocs"],argTypes:{ariaLabel:{control:"text",description:"Titre du fil d'Ariane"}},render:({...e})=>`
          <qc-ariane ${e.type?`ariaLabel="${e.type}"`:""}>
            <ol>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Catégorie</a></li>
                <li><a href="#">Sous-catégorie</a></li>
            </ol>
          </qc-ariane>`},a={args:{ariaLabel:"Fil d'Ariane"}};var r,i,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Fil d\\'Ariane"
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const d=["Default"];export{a as Default,d as __namedExportsOrder,c as default};
