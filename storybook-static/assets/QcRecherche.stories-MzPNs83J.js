import{Q as d}from"./QcRecherche-fHsOTiIx.js";const h={title:"Composants/QcRecherche",component:d,argTypes:{placeholder:{control:"text",description:"Placeholder du champ de recherche."},label:{control:"text",description:"Libellé du champ de recherche pour les utilisateurs de lecteur d'écran."},btnlabel:{control:"text",description:"Libellé du bouton de recherche pour les utilisateurs de lecteur d'écran."},variant:{control:"select",options:["light","dark"],description:"Variante du composant."},action:{control:"text",description:"URL de destination de la recherche."},name:{control:"text",description:"Nom de l'input pour la recherche."},value:{control:"text",description:"Valeur initiale du champ de recherche."}},render:({...e})=>s(e)};function s(e){return`
      <qc-recherche
        ${e.placeholder?`placeholder="${e.placeholder}"`:""}
        ${e.label?`label="${e.label}"`:""}
        ${e.variant?`variant="${e.variant}"`:""}
        ${e.btnlabel?`btnlabel="${e.btnlabel}"`:""}
        ${e.action?`action="${e.action}"`:""}
        ${e.name?`name="${e.name}"`:""}
        ${e.value?`value="${e.value}"`:""}
      >
      </qc-recherche>
    `}const c={args:{placeholder:"Rechercher dans ce site",label:"Rechercher",name:"search",value:""}},r={args:{placeholder:"Rechercher un produit",btnlabel:"Rechercher",variant:"dark",name:"header-search",value:"Valeur initiale"},decorators:[e=>`
      <div class="bg-bleu-piv p-4">
        ${e()}
      </div>
    `]};r.storyName="Recherche dans le header";var a,t,n;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    placeholder: "Rechercher dans ce site",
    label: "Rechercher",
    name: "search",
    value: ""
  }
}`,...(n=(t=c.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var l,o,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "Rechercher un produit",
    btnlabel: "Rechercher",
    variant: "dark",
    name: "header-search",
    value: "Valeur initiale"
  },
  decorators: [Story => \`
      <div class="bg-bleu-piv p-4">
        \${Story()}
      </div>
    \`]
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const u=["Default","Header"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Header:r,__namedExportsOrder:u,default:h},Symbol.toStringTag,{value:"Module"}));export{r as H,b as S};
