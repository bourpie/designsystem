class u extends HTMLElement{static get observedAttributes(){return["label","href","type","checked"]}constructor(){super(),this.attachShadow({mode:"open"}),this._checked=!1}connectedCallback(){this.render()}get template(){return`
      <style>
        a, label {
          color: #095797;
          background-color: #dae6f0;
          border: 1px solid #dae6f0;
          font-weight: 600;
          text-decoration: none;
          padding: 11px 8px;
          font-size: 0.875rem;
          line-height: 1rem;
          transition: border-color 0.25s linear;
          display: inline-block;
          cursor: pointer;
          outline: none;
        }

        a:hover, label:hover, label[aria-checked="true"] {
            border: 1px solid #4A98D9;
            transition: border-color 0.25s linear;
        }

        input[type="checkbox"] {
          display: none; /* Cache la checkbox */
        }

        /* Style appliqué lorsque la case est cochée */
        label[aria-checked="true"] {
          border: 1px solid #4A98D9;
          background-color: #cce0f5;
        }

        label:focus {
          outline: 2px solid #4A98D9; /* Ajout d'un outline pour focus clavier */
        }
      </style>

      ${this.type==="checkbox"?this.checkboxTemplate():this.linkTemplate()}
    `}checkboxTemplate(){const e=`qc-tag-checkbox-${Math.random().toString(36).substring(2,9)}`;return`
      <input type="checkbox" id="${e}" hidden>
      <label for="${e}" role="checkbox" aria-checked="${this._checked}" tabindex="0">
        ${this.label}
      </label>
    `}linkTemplate(){return`
      <a href="${this.href}">
        ${this.label}
      </a>
    `}get label(){return this.getAttribute("label")||"Étiquette par défaut"}set label(e){this.setAttribute("label",e)}get href(){return this.getAttribute("href")||"#"}set href(e){this.setAttribute("href",e)}get type(){return this.getAttribute("type")||"link"}set type(e){this.setAttribute("type",e)}get checked(){return this._checked}set checked(e){this._checked=e==="true"||e===!0,this.updateCheckedState()}updateCheckedState(){const e=this.shadowRoot.querySelector("label");e.setAttribute("aria-checked",this._checked),e.style.borderColor=this._checked?"#4A98D9":"#dae6f0",e.style.backgroundColor=this._checked?"#cce0f5":"#dae6f0"}render(){if(this.shadowRoot.innerHTML=this.template,this.type==="checkbox"){const e=this.shadowRoot.querySelector("label");e.addEventListener("click",()=>{this.checked=!this._checked,this.updateCheckedState()}),e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.checked=!this._checked,this.updateCheckedState())})}}attributeChangedCallback(e,t,a){t!==a&&(e==="checked"&&(this.checked=a==="true"),this.render())}}customElements.get("qc-tag")||customElements.define("qc-tag",u);const p={title:"Composants/QcTag",component:u,tags:["autodocs"],argTypes:{label:{control:"text"},href:{control:"text",if:{arg:"type",eq:"link"}},type:{control:"select",options:["link","checkbox"],description:"Le type de champ de saisie."}},render({label:o,href:e,type:t}){return`
      <qc-tag label="${o}" ${t==="link"?`href="${e}"`:""} type="${t}"></qc-tag>
    `}},r={args:{label:"Étiquette",href:"https://www.google.fr",type:"link"}};r.storyName="Étiquette";const c={args:{label:"Accepter les conditions",type:"checkbox"}};c.storyName="Case à cocher";var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Étiquette',
    href: 'https://www.google.fr',
    type: 'link' // Par défaut, on utilise un lien
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,h,d;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Accepter les conditions',
    type: 'checkbox' // Cette story affiche une case à cocher
  }
}`,...(d=(h=c.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const b=["Default","Checkbox"];export{c as Checkbox,r as Default,b as __namedExportsOrder,p as default};
