import { QcAriane } from "./QcAriane.js"

export default {
    title: 'composants/QcAriane',
    component: QcAriane,
    tags: ['autodocs'],
    argTypes: {
        ariaLabel: {
          control: 'text',
          description: 'Titre du fil d\'Ariane'
        },
      },
    render: ({ ...args }) => {
        return `
          <qc-ariane ${args.type ? `ariaLabel="${args.type}"` : ''}>
            <ol>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Catégorie</a></li>
                <li><a href="#">Sous-catégorie</a></li>
            </ol>
          </qc-ariane>`;
    },
};

export const Default = {
    args: {
        ariaLabel: "Fil d\'Ariane",
    },
};