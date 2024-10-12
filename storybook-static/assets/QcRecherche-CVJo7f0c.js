import{g as c}from"./generateUUID-GKmHwADq.js";const r="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.67%2052.21'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3eFichier%201%3c/title%3e%3cg%20id='Calque_2'%20data-name='Calque%202'%3e%3cg%20id='Calque_1-2'%20data-name='Calque%201'%3e%3cpath%20class='cls-1'%20d='M52.67,47.81l-15-15a20.77,20.77,0,1,0-4.32,4.46L48.28,52.21ZM20.78,35.36A14.41,14.41,0,1,1,35.19,21h0A14.43,14.43,0,0,1,20.78,35.36Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",i="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.68%2052.23'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23223654;}%3c/style%3e%3c/defs%3e%3ctitle%3eFichier%201%3c/title%3e%3cg%20id='Calque_2'%20data-name='Calque%202'%3e%3cg%20id='Calque_1-2'%20data-name='Calque%201'%3e%3cg%20id='Calque_2-2'%20data-name='Calque%202'%3e%3cg%20id='Calque_1-2-2'%20data-name='Calque%201-2'%3e%3cpath%20class='cls-1'%20d='M52.68,47.83l-15-15a20.77,20.77,0,1,0-4.32,4.46L48.29,52.23ZM20.79,35.38A14.41,14.41,0,1,1,35.2,21V21h0A14.43,14.43,0,0,1,20.79,35.38Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";class l extends HTMLElement{static get observedAttributes(){return["placeholder","class","label","btnlabel","variant","action","id","name","value"]}constructor(){super(),this.uuid=`input-${c()}`,this.render()}attributeChangedCallback(e,t,a){t!==a&&this.render()}connectedCallback(){const e=this.querySelector(".clear-btn");e&&e.addEventListener("click",this.clearInput.bind(this))}clearInput(){const e=this.querySelector("input");e&&(e.value="",e.focus())}render(){this.innerHTML=this.template}get template(){return`
      <form method="get" action="${this.action}" class="container">
        <div class="input-group">
          <label for="${this.inputId}" class="visually-hidden">${this.label}</label>
          <input
            id="${this.inputId}"
            name="${this.inputName}"
            type="text"
            placeholder="${this.placeholder}"
            class="form-control search-input"
            value="${this.inputValue}"
          />
          <button type="button" aria-label="Effacer" class="clear-btn"><span class="lnr lnr-cross"></span></button>
          <span class="input-group-btn">
            <button type="submit" aria-label="${this.btnlabel}" class="btn-search">
              ${this.generateSearchIcon()}
            </button>
          </span>
        </div>
      </form>
    `}generateSearchIcon(){return`<img src="${this.variant==="dark"?i:r}" alt="Rechercher" width="24" height="24" />`}get placeholder(){return this.getAttribute("placeholder")||"Rechercher"}get label(){return this.getAttribute("label")||"Rechercher"}get btnlabel(){return this.getAttribute("btnlabel")||"Rechercher"}get variant(){return this.getAttribute("variant")||"light"}get action(){const e=document.documentElement.lang||"fr";return`${this.getAttribute("action")||"/"}?lang=${e}`}get inputId(){return this.getAttribute("id")||this.uuid}get inputName(){return this.getAttribute("name")||"query"}get inputValue(){const e=new URLSearchParams(window.location.search);return this.getAttribute("value")||e.get("query")||""}}customElements.get("qc-recherche")||customElements.define("qc-recherche",l);export{l as Q};
