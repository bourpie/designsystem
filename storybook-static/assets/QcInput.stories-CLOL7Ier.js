import{g as M}from"./generateUUID-GKmHwADq.js";class L extends HTMLElement{static get observedAttributes(){return["class","type","size","placeholder","label","aide","value","disabled","required","errorMsg","error","maxlength","maxlength-info"]}constructor(){super(),this.render()}get template(){const t=M(),r=`input-${t}`,i=`aide-${t}`,n=`error-${t}`,d=`maxlength-info-${t}`,y=this.currentSize?`input-${this.currentSize}`:"",A=this.error?"input-error":"",u=this.getCommonAttributes(r,y,i,n,A),z=this.currentSize==="multi"?`<textarea ${u} aria-labelledby="${r}-label">${this.value}</textarea>`:`<input ${u} aria-labelledby="${r}-label" value="${this.value}">`;return`
        <div class="form-group ${this.error?"has-error":""} ${this.disabled?"is-disabled":""}">
            <label id="${r}-label" for="${r}">${this.label}</label> 
            ${this.aide&&`<div class="input-aide" id="${i}">${this.aide}</div>`}
            ${z}
            ${this.maxlengthInfo||this.error?`
                <div class="input-info-container">
                    ${this.error?`<small class="error-message" id="${n}" aria-live="polite">${this.errorMsg}</small>`:"<small></small>"}   
                    ${this.currentSize==="multi"&&this.maxlength?`<small class="maxlength-info" id="${d}">${this.maxlengthInfo} ${this.maxlength-(this.value.length||0)}</small>`:"<small></small>"}
                </div>
            `:""}
        </div>
        `}getCommonAttributes(t,r,i,n,d){return`
            name="${t}" 
            id="${t}" 
            placeholder="${this.placeholder}"
            class="input ${r} ${d}"
            ${this.maxlength?'maxlength="'+this.maxlength+'"':""}
            ${this.disabled?"disabled":""}
            ${this.required?"required":""}
            aria-describedby="${this.aide?i:""} ${this.error?n:""}"
        `}get placeholder(){return this.getAttribute("placeholder")||""}get label(){return this.getAttribute("label")||"Mon champ"}get type(){return this.getAttribute("type")||"text"}get size(){return this.getAttribute("size")||"md"}get value(){return this.getAttribute("value")||""}get disabled(){return this.hasAttribute("disabled")}get required(){return this.hasAttribute("required")}get aide(){return this.getAttribute("aide")||""}get currentSize(){const t=this.getAttribute("size");return["sm","md","lg","xl","multi"].includes(t)?t:"md"}get errorMsg(){return this.getAttribute("errorMsg")||""}get error(){return this.hasAttribute("error")}get maxlength(){return this.currentSize==="multi"?this.getAttribute("maxlength")||500:this.getAttribute("maxlength")||""}get maxlengthInfo(){return this.getAttribute("maxlength-info")||""}attributeChangedCallback(t,r,i){r!==i&&this.render()}connectedCallback(){this.addEventListeners()}disconnectedCallback(){this.removeEventListeners()}addEventListeners(){const t=this.querySelector("input, textarea");t&&t.addEventListener("input",this.updateMaxlengthInfo.bind(this))}removeEventListeners(){const t=this.querySelector("input, textarea");t&&t.removeEventListener("input",this.updateMaxlengthInfo.bind(this))}updateMaxlengthInfo(t){const r=t.target,i=this.querySelector(".maxlength-info");i&&this.maxlength&&this.currentSize==="multi"&&(i.textContent=`${this.maxlengthInfo} ${this.maxlength-r.value.length}`)}render(){this.innerHTML=this.template,this.addEventListeners()}}customElements.get("qc-input")||customElements.define("qc-input",L);const E={title:"Formulaires/QcInput",component:L,tags:["autodocs"],argTypes:{label:{control:"text",description:"Le texte de l'étiquette pour le champ de saisie."},type:{control:"select",options:["","text","email","password","number","tel","url","search","date","time","datetime-local","month","week"],description:"Le type de champ de saisie."},size:{control:"select",options:["sm","md","lg","xl","multi"],description:"La taille du champ de saisie."},value:{control:"text",description:"La valeur actuelle du champ de saisie."},disabled:{control:"boolean",description:"Désactive le champ de saisie si vrai."},required:{control:"boolean",description:"Rend le champ de saisie obligatoire si vrai."},aide:{control:"text",description:"Texte d'aide affiché sous le champ de saisie."},error:{control:"boolean",description:"Affiche un état d'erreur si vrai."},errorMsg:{control:"text",description:"Le message d'erreur à afficher en cas d'erreur."},placeholder:{control:"text",description:"Le texte d'espace réservé à afficher dans le champ de saisie."},maxlength:{control:"number",description:"La longueur maximale autorisée pour le champ de saisie."},maxlengthInfo:{control:"text",description:"Texte d'information à utiliser avec le champ de taille multi pour indiquer la longueur maximale du champ de saisie."}},render({...e}){return`
            <qc-input
                ${e.label?`label="${e.label}"`:""} 
                ${e.size?`size="${e.size}"`:""} 
                ${e.type?`type="${e.type}"`:""}
                ${e.value?`name="${e.name}"`:""}
                ${e.value?`value="${e.value}"`:""}
                ${e.disabled?"disabled":""}
                ${e.required?"required":""}
                ${e.aide?`aide="${e.aide}"`:""}
                ${e.error?"error":""}
                ${e.errorMsg?`errorMsg="${e.errorMsg}"`:""}
                ${e.placeholder?`placeholder="${e.placeholder}"`:""}
                ${e.maxlength?`maxlength="${e.maxlength}"`:""}
                ${e.maxlengthInfo?`maxlength-info="${e.maxlengthInfo}"`:""}
            ></qc-input>
        `.replace(/\s+/g," ").trim()}},a={args:{label:"Label",placeholder:"Placeholder"}};a.storyName="Champ de type texte";const l={args:{label:"Label",placeholder:"Placeholder",required:!0}};l.storyName="Champ requis";const o={args:{label:"Label",placeholder:"Placeholder",error:!0,errorMsg:"Ce champ est obligatoire",required:!0}},s={args:{label:"Label",placeholder:"Placeholder",size:"multi",maxlength:500,maxlengthInfo:"Caractères maximum :"}};s.storyName="Champ multi lignes";var c,h,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder'
  }
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,g,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,$,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: true,
    errorMsg: 'Ce champ est obligatoire',
    required: true
  }
}`,...(f=($=o.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var v,q,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    size: 'multi',
    maxlength: 500,
    maxlengthInfo: 'Caractères maximum :'
  }
}`,...(I=(q=s.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const S=["Default","Requis","Erreur","Multi"];export{a as Default,o as Erreur,s as Multi,l as Requis,S as __namedExportsOrder,E as default};
