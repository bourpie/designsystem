import{Q as j}from"./QcBouton-Cp_7O4NA.js";const q={title:"Composants/QcBouton",component:j,argTypes:{type:{control:"select",options:["principal","secondaire","tertiaire","avertissement","session"],description:"Type de bouton (principal par défaut)"},size:{control:"select",options:["normal","compact"],description:"Taille du bouton"},display:{control:"select",options:["inline-block","block"],description:"Afficher le bouton en ligne ou en bloc"},icon:{control:"select",options:["lnr-home","lnr-apartment","lnr-pencil","lnr-magic-wand","lnr-drop","lnr-lighter","lnr-poop","lnr-sun","lnr-moon","lnr-cloud","lnr-cloud-upload","lnr-cloud-download","lnr-cloud-sync","lnr-cloud-check","lnr-database","lnr-lock","lnr-cog","lnr-trash","lnr-dice","lnr-heart","lnr-star","lnr-star-half","lnr-star-empty","lnr-flag","lnr-envelope","lnr-paperclip","lnr-inbox","lnr-eye","lnr-printer","lnr-file-empty","lnr-file-add","lnr-enter","lnr-exit","lnr-graduation-hat","lnr-license","lnr-music-note","lnr-film-play","lnr-camera-video","lnr-camera","lnr-picture","lnr-book","lnr-bookmark","lnr-user","lnr-users","lnr-shirt","lnr-store","lnr-cart","lnr-tag","lnr-phone-handset","lnr-phone","lnr-pushpin","lnr-map-marker","lnr-map","lnr-location","lnr-calendar-full","lnr-keyboard","lnr-spell-check","lnr-screen","lnr-smartphone","lnr-tablet","lnr-laptop","lnr-laptop-phone","lnr-power-switch","lnr-bubble","lnr-heart-pulse","lnr-construction","lnr-pie-chart","lnr-chart-bars","lnr-gift","lnr-diamond","lnr-linearicons","lnr-dinner","lnr-coffee-cup","lnr-leaf","lnr-paw","lnr-rocket","lnr-briefcase","lnr-bus","lnr-car","lnr-train","lnr-bicycle","lnr-wheelchair","lnr-select","lnr-earth","lnr-smile","lnr-sad","lnr-neutral","lnr-mustache","lnr-alarm","lnr-bullhorn","lnr-volume-high","lnr-volume-medium","lnr-volume-low","lnr-volume","lnr-mic","lnr-hourglass","lnr-undo","lnr-redo","lnr-sync","lnr-history","lnr-clock","lnr-download","lnr-upload","lnr-enter-down","lnr-exit-up","lnr-bug","lnr-code","lnr-link","lnr-unlink","lnr-thumbs-up","lnr-thumbs-down","lnr-magnifier","lnr-cross","lnr-menu","lnr-list","lnr-chevron-up","lnr-chevron-down","lnr-chevron-left","lnr-chevron-right","lnr-arrow-up","lnr-arrow-down","lnr-arrow-left","lnr-arrow-right","lnr-move","lnr-warning","lnr-question-circle","lnr-menu-circle","lnr-checkmark-circle","lnr-cross-circle","lnr-plus-circle","lnr-circle-minus","lnr-arrow-up-circle","lnr-arrow-down-circle","lnr-arrow-left-circle","lnr-arrow-right-circle","lnr-chevron-up-circle","lnr-chevron-down-circle","lnr-chevron-left-circle","lnr-chevron-right-circle","lnr-crop","lnr-frame-expand","lnr-frame-contract","lnr-layers","lnr-funnel","lnr-text-format","lnr-text-format-remove","lnr-text-size","lnr-bold","lnr-italic","lnr-underline","lnr-strikethrough","lnr-highlight","lnr-text-align-left","lnr-text-align-center","lnr-text-align-right","lnr-text-align-justify","lnr-line-spacing","lnr-indent-increase","lnr-indent-decrease","lnr-pilcrow","lnr-direction-ltr","lnr-direction-rtl","lnr-page-break","lnr-sort-alpha-asc","lnr-sort-amount-asc","lnr-hand","lnr-pointer-up","lnr-pointer-right","lnr-pointer-down","lnr-pointer-left"],description:"Icône à afficher dans le bouton"},iconPosition:{control:"radio",options:["left","right"],description:"Position de l'icône"}},render:({label:Q,...r})=>`
      <qc-bouton label="${Q}"${r.size?` size="${r.size}"`:""}${r.href?` href="${r.href}"`:""}${r.type?` type="${r.type}"`:""}${r.display?` display="${r.display}"`:""}${r.icon?` icon="${r.icon}"`:""}${r.iconPosition?` icon-position="${r.iconPosition}"`:""}></qc-bouton>    
      `},n={args:{label:"Principal"}};n.storyName="Bouton principal";const e={args:{label:"Secondaire",type:"secondaire"}};e.storyName="Bouton secondaire";const l={args:{label:"Tertiaire",type:"tertiaire"}};l.storyName="Bouton tertiaire";const o={args:{label:"Avertissement",type:"avertissement"}};o.storyName="Bouton avertissement";const t={args:{label:"Bloc",type:"principal",href:"https://www.google.com/",display:"block"}};t.storyName="Bouton pleine largeur";const a={args:{label:"Précédent",type:"principal",icon:"lnr-arrow-left",iconPosition:"left"}};a.storyName="Icône à gauche";const i={args:{label:"Suivant",type:"principal",icon:"lnr-arrow-right",iconPosition:"right"}};i.storyName="Icône à droite";const c={args:{label:"Connexion",type:"session"}};c.storyName="Bouton de session";var s,p,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Principal'
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Secondaire',
    type: 'secondaire'
  }
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,b,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Tertiaire',
    type: 'tertiaire'
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,w,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Avertissement',
    type: 'avertissement'
  }
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var k,S,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Bloc',
    type: 'principal',
    href: 'https://www.google.com/',
    display: 'block'
  }
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var P,B,$;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Précédent',
    type: 'principal',
    icon: 'lnr-arrow-left',
    iconPosition: 'left'
  }
}`,...($=(B=a.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var T,N,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Suivant',
    type: 'principal',
    icon: 'lnr-arrow-right',
    iconPosition: 'right'
  }
}`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var _,z,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Connexion',
    type: 'session'
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const C=["Primaire","Secondaire","Tertiaire","Avertissement","Block","IconLeft","IconRight","Session"],O=Object.freeze(Object.defineProperty({__proto__:null,Avertissement:o,Block:t,IconLeft:a,IconRight:i,Primaire:n,Secondaire:e,Session:c,Tertiaire:l,__namedExportsOrder:C,default:q},Symbol.toStringTag,{value:"Module"}));export{o as A,O as B,n as P,e as S,l as T};
