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
            titre: "Rechercher un produit",
            texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
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
                  <qc-accordeon>
                  <button class="accordion-toggle">
                  Titre <span class="icon lnr lnr-chevron-down"></span> 
                  </button>
                  <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cui Tubuli nomen odio non est? Sed residamus, inquit, si placet. De vacuitate doloris eadem sententia erit. Duo Reges: constructio interrete. Bonum patria: miserum exilium. </p>
                  <p>Ut id aliis narrare gestiant? Frater et T. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Cui Tubuli nomen odio non est? </p>
                  </div>
              </qc-accordeon>
              </nav>
          `,
      ]
  };