import{ae as e,af as r,ah as a,ai as t,ag as i}from"./index-CFLyRSnV.js";import{u as l}from"./index-C-ZhoMRo.js";import{N as u}from"./QcNavigation.stories-BS_84ZWP.js";import"./iframe-DL6UtLZ7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:u}),`
`,e.jsx(n.h1,{id:"navigation-principale",children:"Navigation principale"}),`
`,e.jsxs(n.p,{children:["Le composant ",e.jsx(n.code,{children:"<qc-navigation>"})," est conçu pour simplifier la création de menus de navigation accessibles et fonctionnels. Il ajoute automatiquement les attributs nécessaires pour l'accessibilité et le bon fonctionnement du menu."]}),`
`,e.jsx(a,{}),`
`,e.jsx(t,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Pour utiliser le composant, vous pouvez simplement insérer une liste de liens, et optionnellement, un bouton avec une icone pour afficher une sous-liste de base dans votre document. Le composant se chargera d'ajouter les attributs nécessaires pour l'accessibilité et la gestion des sous-menus."}),`
`,e.jsx(n.p,{children:"Voici un exemple de code HTML à utiliser :"}),`
`,e.jsx(i,{code:`<qc-navigation>
      <ul>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a>Contenu</a>
        </li>
        <li>
          <a href="#">Design</a>
        </li>
        <li>
          <a href="#">Ressources</a>
          <button>
            <span class="lnr lnr-chevron-down"></span>
          </button>
          <ul>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Vidéos</a></li>
          </ul>
        </li>
      </ul>
    </qc-navigation>`}),`
`,e.jsx(n.h2,{id:"fonctionnalités",children:"Fonctionnalités"}),`
`,e.jsx(n.h3,{id:"accessibilité-",children:"Accessibilité :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Les rôles ARIA et les attributs nécessaires sont ajoutés automatiquement pour garantir que le menu est accessible."}),`
`,e.jsxs(n.li,{children:["Chaque lien ",e.jsx(n.code,{children:"<a>"})," reçoit le rôle ",e.jsx(n.code,{children:"menuitem"}),"."]}),`
`,e.jsxs(n.li,{children:["Chaque bouton de sous-menu reçoit les attributs ",e.jsx(n.code,{children:"aria-haspopup"}),", ",e.jsx(n.code,{children:"aria-expanded"}),", et ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"sous-menus-",children:"Sous-menus :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Les sous-menus sont gérés automatiquement. Les boutons de sous-menu reçoivent une icône qui change selon l'état (déployé/réduit)."}),`
`,e.jsx(n.li,{children:"Les sous-menus sont masqués par défaut et affichés lorsque le bouton de sous-menu correspondant est cliqué."}),`
`]}),`
`,e.jsx(n.h2,{id:"exemple-de-structure-générée",children:"Exemple de structure générée"}),`
`,e.jsx(n.p,{children:"Voici un aperçu de la structure HTML générée après l'initialisation du composant :"}),`
`,e.jsx(i,{code:`<qc-navigation>
    <ul role="menubar">
        <li role="none">
            <a href="#" role="menuitem">À propos</a>
        </li>
        <li role="none" aria-current="page">
            <a href="#" role="menuitem">Contenu</a>
            <button class="submenu-toggle" aria-haspopup="true" aria-expanded="false" aria-label="Développer le sous-menu">
                <span class="lnr lnr-chevron-down"></span>
            </button>
            <ul class="submenu" role="menu" aria-label="Sous-menu Contenu">
                <li role="none"><a href="#" role="menuitem">Articles</a></li>
                <li role="none"><a href="#" role="menuitem">Vidéos</a></li>
            </ul>
        </li>
        <li role="none">
            <a href="#" role="menuitem">Design</a>
        </li>
        <li role="none">
            <a href="#" role="menuitem">Ressources</a>
        </li>
    </ul>
</qc-navigation>`}),`
`,e.jsx(n.h2,{id:"todos",children:"Todos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Version mobile"}),`
`]})]})}function g(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{g as default};
