class g extends HTMLElement{static get observedAttributes(){return["message","type","class","fermeture"]}constructor(){super(),this.render()}attributeChangedCallback(e,h,v){h!==v&&this.render()}get template(){return`
      <div class="container"¨>
        ${this.type==="avertissement"?'<div class="icon"><?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ad781c"><path d="M20.0429 21H3.95705C2.41902 21 1.45658 19.3364 2.22324 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z" stroke="#ad781c" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 9V13" stroke="#ad781c" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 17.01L12.01 16.9989" stroke="#ad781c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>':'<div class="icon"><?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#223654"><path d="M12 11.5V16.5" stroke="#223654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke="#223654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#223654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>'}
        <div role="alert">
          ${this.message}
        </div>
        ${this.fermeture==="oui"?`
          <button aria-label="${this.closeButtonLabel}" class="close-btn">
          <?xml version="1.0" encoding="UTF-8"?><svg width="32px" height="32px" stroke-width=".5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#000000" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>`:""}
      </div>
    `}get message(){return this.getAttribute("message")}get type(){return this.getAttribute("type")||"avertissement"}get fermeture(){return this.getAttribute("fermeture")||"non"}get closeButtonLabel(){switch(document.documentElement.lang||"en"){case"fr-CA":return"Fermer le message";case"es":return"Cerrar el mensaje";default:return"Close the message"}}render(){this.innerHTML=this.template,this.fermeture==="oui"&&this.querySelector(".close-btn").addEventListener("click",()=>this.closeAlert())}closeAlert(){this.style.display="none"}}customElements.get("qc-alerte")||customElements.define("qc-alerte",g);const f={title:"Composants/QcAlerte",component:g,tags:["autodocs"],argTypes:{message:{control:"text"},fermeture:{control:"radio",options:["oui","non"]},type:{control:"radio",options:["avertissement","information"],label:"Type d'alerte"}},render:({message:i,...e})=>`<qc-alerte ${e.type?`type="${e.type}"`:""} 
    ${e.fermeture?`fermeture="${e.fermeture}"`:""} message="${i}"} >
</qc-alerte>`},t={args:{type:"avertissement",message:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
                <ul>
                    <li>Dictumst est elementum, laoreet facilisi ridiculus etiam scelerisque vitae natoque!</li>
                    <li>Cras nibh tempor pellentesque eleifend duis platea taciti diam consequat.</li>
                    <li>Varius semper condimentum velit sagittis vitae nostra id neque sit.</li>
                </ul>
            `}},s={args:{message:"Mon message",type:"information"}},r={args:{message:"Mon message",type:"avertissement",fermeture:"oui"}};var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: "avertissement",
    message: \`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
                <ul>
                    <li>Dictumst est elementum, laoreet facilisi ridiculus etiam scelerisque vitae natoque!</li>
                    <li>Cras nibh tempor pellentesque eleifend duis platea taciti diam consequat.</li>
                    <li>Varius semper condimentum velit sagittis vitae nostra id neque sit.</li>
                </ul>
            \`
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    message: "Mon message",
    type: "information"
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    message: "Mon message",
    type: "avertissement",
    fermeture: "oui"
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const k=["Avertissement","Information","Fermeture"];export{t as Avertissement,r as Fermeture,s as Information,k as __namedExportsOrder,f as default};
