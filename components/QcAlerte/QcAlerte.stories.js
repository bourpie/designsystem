import { QcAlerte } from "./QcAlerte";

export default {
    title: "Composants/QcAlerte",
    component: QcAlerte,
    argTypes: {
        message: {
            control: "text",
            description: "Message à afficher dans l'alerte",
        }
    },
    render: ({ message, ...args }) => {
        return `
          <qc-alerte ${args.message ? `message="${args.message}"` : ''}></qc-alerte>`;
      },
    };

    export const Alerte = {
        args: {
            message: "Alerte",
        },
    };