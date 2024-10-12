class c extends HTMLElement{static get observedAttributes(){return["titre","contenu","type","class"]}attributeChangedCallback(e,s,a){s!==a&&this.render()}constructor(){super(),this.render()}get template(){return`
            <div role="alert" class="avis avis-${this.className?`${this.className} ${this.currenttype}`:this.currenttype}">
                <div class="avis-img">
                    ${this.iconForType(this.currenttype)}
                </div>
                <div class="avis-content">
                    <h3 class="h5 avis-titre">${this.titre}</h3>
                    <div>${this.contenu}</div>
                </div>
            </div>
        `}render(){this.innerHTML=this.template}get currenttype(){const e=this.getAttribute("type");return["general","important","succes","erreur","complementaire"].includes(e)?e:"general"}get titre(){return this.getAttribute("titre")||"Titre"}get contenu(){return this.getAttribute("contenu")||"Contenu"}iconForType(e){const s={general:`
                <svg width="24" height="24" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M12 7.01001V7.00002M12 17L12 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#223654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>`,important:`
                <svg fill="#ad781c" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 367.011 367.01">
                    <g>
                        <path d="M365.221,329.641L190.943,27.788c-1.542-2.674-4.395-4.318-7.479-4.318c-3.084,0-5.938,1.645-7.48,4.318L1.157,330.584
                            c-1.543,2.674-1.543,5.965,0,8.639c1.542,2.674,4.395,4.318,7.48,4.318h349.65c0.028,0,0.057,0,0.086,0
                            c4.77,0,8.638-3.863,8.638-8.639C367.011,332.92,366.342,331.1,365.221,329.641z M23.599,326.266L183.464,49.381l159.864,276.885
                            H23.599z"/>
                        <path d="M174.826,136.801v123.893c0,4.773,3.867,8.638,8.638,8.638c4.77,0,8.637-3.863,8.637-8.638V136.801
                            c0-4.766-3.867-8.637-8.637-8.637C178.693,128.165,174.826,132.036,174.826,136.801z"/>
                        <path d="M183.464,279.393c-5.922,0-10.725,4.8-10.725,10.722s4.803,10.729,10.725,10.729c5.921,0,10.725-4.809,10.725-10.729
                            C194.189,284.193,189.386,279.393,183.464,279.393z"/>
                    </g>
                </svg>`,succes:`
                <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#2c4024;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}</style>
                    </defs>
                    <g data-name="Layer 2">
                        <g data-name="E408, Success, Media, media player, multimedia">
                            <circle class="cls-1" cx="256" cy="256" r="246"/>
                            <polyline class="cls-1" points="115.54 268.77 200.67 353.9 396.46 158.1"/>
                        </g>
                    </g>
                </svg>`,erreur:`
                <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#692519;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}</style>
                    </defs>
                    <g data-name="Layer 2">
                        <g data-name="E410, Error, Media, media player, multimedia">
                            <circle class="cls-1" cx="256" cy="256" r="246"/>
                            <line class="cls-1" x1="371.47" x2="140.53" y1="140.53" y2="371.47"/>
                            <line class="cls-1" x1="371.47" x2="140.53" y1="371.47" y2="140.53"/>
                        </g>
                    </g>
                </svg>`,complementaire:`
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="0 0 56 56">
                    <path d="M 19.5039 43.1523 L 36.4726 43.1523 C 37.2695 43.1523 37.7617 42.6601 37.7617 41.8633 L 37.7617 38.1133 C 37.7617 32.4414 46.0117 28.7852 46.0117 18.6601 C 46.0117 7.9961 38.7930 .8711 27.9883 .8711 C 17.1836 .8711 9.9883 7.9961 9.9883 18.6601 C 9.9883 28.7852 18.2148 32.4414 18.2148 38.1133 L 18.2148 41.8633 C 18.2148 42.6601 18.7304 43.1523 19.5039 43.1523 Z M 21.7070 38.1601 C 21.7070 31.2695 13.5273 27.5898 13.5273 18.6836 C 13.5273 10.1054 19.3164 4.4101 27.9883 4.4101 C 36.6601 4.4101 42.4726 10.1054 42.4726 18.6836 C 42.4726 27.5898 34.2695 31.2695 34.2695 38.1601 L 34.2695 39.6133 L 21.7070 39.6133 Z M 20.3711 49.4805 L 35.6055 49.4805 C 36.8008 49.4805 37.7617 48.4961 37.7617 47.2773 C 37.7617 46.0586 36.8008 45.0742 35.6055 45.0742 L 20.3711 45.0742 C 19.1758 45.0742 18.2148 46.0586 18.2148 47.2773 C 18.2148 48.4961 19.1758 49.4805 20.3711 49.4805 Z M 27.9883 55.1289 C 31.2226 55.1289 33.4961 53.6523 33.7304 51.3789 L 22.2461 51.3789 C 22.4570 53.6523 24.7304 55.1289 27.9883 55.1289 Z"/>
                </svg>`};return s[e]||s.general}}customElements.define("qc-avis",c);const l={title:"composants/QcAvis",component:c,argTypes:{type:{control:"radio",options:["general","important","succes","erreur","complementaire"],description:"Type d'avis"},titre:{control:"text",description:"Titre de l'avis"},contenu:{control:"text",description:"Contenu de l'avis"}},render:({...t})=>`
          <qc-avis 
            ${t.type?`type="${t.type}"`:""} 
            titre="${t.titre}" 
            contenu="${t.contenu}">
          </qc-avis>`},r={args:{type:"general",titre:"Titre",contenu:"Contenu"}};var i,n,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'general',
    titre: 'Titre',
    contenu: 'Contenu'
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const d=["Default"];export{r as Default,d as __namedExportsOrder,l as default};
