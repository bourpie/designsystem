import { QcAvis } from "./QcAvis.js"

export default {
    title: 'composants/QcAvis',
    component: QcAvis,
    argTypes: {
        type: {
          control: 'radio',
          options: ['general', 'important', 'succes', 'erreur', 'complementaire'],
          description: 'Type d\'avis',
        },
        titre: {
          control: 'text',
          description: 'Titre de l\'avis'
        },
        contenu: {
          control: 'text',
          description: 'Contenu de l\'avis'
        }
      },
    render: ({ ...args }) => {
        return `
          <qc-avis 
            ${args.type ? `type="${args.type}"` : ''} 
            titre="${args.titre}" 
            contenu="${args.contenu}">
          </qc-avis>`;
    },
};

export const Default = {
    args: {
        type: 'general',
        titre: 'Titre',
        contenu: 'Contenu',
    },
};
