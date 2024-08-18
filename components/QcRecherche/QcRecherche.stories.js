import { QcRecherche } from "./QcRecherche";

export default {
  title: "Composants/QcRecherche",
  component: QcRecherche,
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder du champ de recherche.",
    },
    label: {
      control: "text",
      description: "Libellé du champ de recherche pour les utilisateurs de lecteur d'écran.",
    },
    btnlabel: {
      control: "text",
      description: "Libellé du bouton de recherche pour les utilisateurs de lecteur d'écran.",
    },
    variant: {
      control: "select",
      options: ["light", "dark"],
      description: "Variante du composant.",
    },
    action: {
      control: "text",
      description: "URL de destination de la recherche.",
    },
    name: {
      control: "text",
      description: "Nom de l'input pour la recherche.",
    },
    value: {
      control: "text",
      description: "Valeur initiale du champ de recherche.",
    }
  },
  render: ({ ...args }) => {
    return generateQcRecherche(args);
  },
};

function generateQcRecherche(args) {
    return `
      <qc-recherche
        ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
        ${args.label ? `label="${args.label}"` : ''}
        ${args.variant ? `variant="${args.variant}"` : ''}
        ${args.btnlabel ? `btnlabel="${args.btnlabel}"` : ''}
        ${args.action ? `action="${args.action}"` : ''}
        ${args.name ? `name="${args.name}"` : ''}
        ${args.value ? `value="${args.value}"` : ''}
      >
      </qc-recherche>
    `;  
}

export const Default = {
  args: {
    placeholder: "Rechercher dans ce site",
    label: "Rechercher",
    name: "search",
    value: "",
  },
};

export const Header = {
  args: {
    placeholder: "Rechercher un produit",
    btnlabel: "Rechercher",
    variant: "dark",
    name: "header-search",
    value: "Valeur initiale",
  },
  decorators: [
    (Story) => `
      <div class="bg-bleu-piv p-4">
        ${Story()}
      </div>
    `,
  ]
};
Header.storyName = "Recherche dans le header";
