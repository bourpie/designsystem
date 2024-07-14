import { QcAccordeon } from './QcAccordeon.js';

export default {
    title: "Composants/QcAccordeon",
    component: QcAccordeon,
    argTypes: {
        titre: {
            control: "text",
        },
        texte: {
            control: "text",
        }
    },
    render: ({ ...args }) => {
        return `
<qc-accordeon>
    <button class="accordion-toggle">
        ${args.titre ? args.titre : 'Titre du bouton'} <span class="icon lnr lnr-chevron-down"></span> 
    </button>
    <div>
    ${args.texte ? args.texte : `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
    `}
    </div>
</qc-accordeon>
    `;
      },
    };

    export const Primary = {
        args: {
            titre: "Titre du bouton",
            texte: "Texte du contenu de l'accordéon",
        },
        decorators: [
            (Story) => Story()
        ]
    };

    export const Navigation = {
      args: {
          titre: "Rechercher un produit",
      },
      decorators: [
          (Story) => `
              <nav>
                  ${Story()}
                  ${Story()}
              </nav>
          `,
      ]
  };