import { QcAlerte } from "./QcAlerte";

export default {
    title: "Composants/QcAlerte",
    component: QcAlerte,
    argTypes: {
        message: {
            control: "text",
            description: "Message à afficher dans l'alerte",
        },
        fermeture: {
            control: "radio",
            options: ["oui", "non"],
            description: "Permet de fermer l'alerte",
        },
        type: {
            control: "radio",
            options: ["avertissement", "information"],
            description: "Type d'alerte",
        }
    },
    render: ({ message, ...args }) => {
        return `
          <qc-alerte 
            ${args.type ? `type="${args.type}"` : ''} 
            ${args.fermeture ? `fermeture="${args.fermeture}"` : ''} 
            message="${message}"} >
          </qc-alerte>`;
      },
    };

    export const Avertissement = {
        args: {
            message: "Mon message",
            type: "avertissement",
        },
    };

    export const Information = {
        args: {
            message: "Mon message",
            type: "information",
        },
    };

    export const Fermeture = {
        args: {
            message: "Mon message",
            type: "avertissement",
            fermeture: "oui",
        },
    };