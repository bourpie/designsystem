class i extends HTMLElement{static get observedAttributes(){return["label","type","href","class","display","size","icon","icon-position"]}constructor(){super(),this.render()}attributeChangedCallback(t,e,s){e!==s&&this.render()}get template(){const t=this.className?this.className+" "+this.currenttype:this.currenttype+" "+this.currentDisplay;return`
      ${this.href?`<a href="${this.href}" class="${t}">
          ${this.icon&&this.iconPosition==="left"?`<span class="lnr ${this.icon}"></span>`:""}
          <span class="btn-texte">${this.label}</span>
          ${this.icon&&this.iconPosition==="right"?`<span class="lnr ${this.icon}"></span>`:""}
        </a>`:`<button class="${t}">
          ${this.icon&&this.iconPosition==="left"?`<span class="lnr ${this.icon}"></span>`:""}
          <span class="btn-texte">${this.label}</span>
          ${this.icon&&this.iconPosition==="right"?`<span class="lnr ${this.icon}"></span>`:""}
        </button>`}
    `}get label(){return this.getAttribute("label")||"Bouton"}get currenttype(){const t=this.getAttribute("type");return["principal","secondaire","tertiaire","avertissement","session"].includes(t)?t:"principal"}get currentDisplay(){const t=this.getAttribute("display");return["inline-block","block"].includes(t)?t:"inline-block"}get currentSize(){const t=this.getAttribute("size");return["normal","compact"].includes(t)?t:"normal"}get icon(){return this.getAttribute("icon")}get iconPosition(){const t=this.getAttribute("icon-position");return["left","right"].includes(t)?t:"left"}get href(){return this.getAttribute("href")}render(){this.innerHTML=this.template}}customElements.get("qc-bouton")||customElements.define("qc-bouton",i);export{i as Q};
