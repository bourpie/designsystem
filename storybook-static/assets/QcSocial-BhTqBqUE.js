class r extends HTMLElement{static get observedAttributes(){return["titre","medias","theme"]}constructor(){super(),this.render()}get template(){const s=this.theme==="light"?"theme-light":"theme-dark",t=JSON.parse(this.medias||"[]").map(e=>`
            <li>
                <a href="${e.url}" target="_blank" rel="noopener noreferrer">
                    <img src="${e.icon}" alt="${e.text} icon">
                    <span class="visually-hidden">${e.text}</span>
                </a>
            </li>
        `).join("");return`
            <div class="qc-social ${s}">
                <h3>${this.titre}</h3>
                <ul>
                    ${t}
                </ul>
            </div>
        `}get titre(){return this.getAttribute("titre")||"Suivez-nous sur les réseaux sociaux"}get medias(){return this.getAttribute("medias")}get theme(){return this.getAttribute("theme")||"dark"}attributeChangedCallback(s,i,t){i!==t&&this.render()}render(){this.innerHTML=this.template}}customElements.get("qc-social")||customElements.define("qc-social",r);export{r as Q};
