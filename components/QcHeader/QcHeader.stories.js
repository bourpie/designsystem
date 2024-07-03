import { QcHeader } from "./QcHeader";

export default {
    title: "Modules/QcHeader",
    tags: ['autodocs'],
    component: QcHeader,
    argTypes: {
        titre: {
            control: "text",
            description: "Titre du site",
        },
        btnlabel: {
            control: "text",
            description: "Libellé du bouton de recherche pour les utilisateurs de lecteur d'écran.",
        },
        contacturl: {
            control: "text",
            description: "URL de la page de contact",
        },
        contactlabel: {
            control: "text",
            description: "Libellé du lien vers la page de contact",
        },
        action: {
            control: "text",
            description: "URL de destination de la recherche.",
        }
    },
    render: ({ ...args }) => {
        return `
          <qc-header
            ${args.titre ? `titre="${args.titre}"` : ''}
            ${args.btnlabel ? `btnlabel="${args.btnlabel}"` : ''}
            ${args.contacturl ? `contacturl="${args.contacturl}"` : ''}
            ${args.contactlabel ? `contactlabel="${args.contactlabel}"` : ''}
            ${args.action ? `action="${args.action}"` : ''}
            ${args.langueurl ? `langueurl="${args.langueurl}"` : ''}
          >
          </qc-header>`;
      },
    };

    export const Default = {
        args: {
            titre: "Mon site",
            langueurl: "https://www.quebec.ca/en"
        },
};
