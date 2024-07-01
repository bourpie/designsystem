import { QcRecherche } from "./QcRecherche";

export default {
    title: "Composants/QcRecherche",
    tags: ['autodocs'],
    component: QcRecherche,
    argTypes: {
        placeholder: {
            control: "text",
        },
        label: {
            control: "text",
        },
        btnlabel: {
            control: "text",
        },
        variant: {
            control: "select",
            options: ["light", "dark"],
        }
    },
    render: ({ ...args }) => {
        return `
          <qc-recherche
            ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
            ${args.label ? `label="${args.label}"` : ''}
            ${args.variant ? `variant="${args.variant}"` : ''}
            ${args.btnlabel ? `btnlabel="${args.btnlabel}"` : ''}
          >
          </qc-recherche>`;
      },
    };

    export const Default = {
        args: {
            placeholder: "Rechercher dans ce site",
            label: "Rechercher",
        },
    };

    export const Placeholder = {
        args: {
            placeholder: "Rechercher un produit",
            btnlabel: "Rechercher",
            variant: "dark",
        },
        decorators: [
            (Story) => `
                <div class="bg-bleu-piv p-4">
                    ${Story()}
                </div>
            `,
        ]
    };