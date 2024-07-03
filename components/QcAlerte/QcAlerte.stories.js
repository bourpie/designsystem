import { QcAlerte } from "./QcAlerte";

export default {
    title: "Composants/QcAlerte",
    component: QcAlerte,
    tags: ['autodocs'],
    argTypes: {
        message: {
            control: "text",
        },
        fermeture: {
            control: "radio",
            options: ["oui", "non"],
        },
        type: {
            control: "radio",
            options: ["avertissement", "information"],
            label: "Type d'alerte",
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
            type: "avertissement",
            message: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>
                <ul>
                    <li>Dictumst est elementum, laoreet facilisi ridiculus etiam scelerisque vitae natoque!</li>
                    <li>Cras nibh tempor pellentesque eleifend duis platea taciti diam consequat.</li>
                    <li>Varius semper condimentum velit sagittis vitae nostra id neque sit.</li>
                </ul>
            `,

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