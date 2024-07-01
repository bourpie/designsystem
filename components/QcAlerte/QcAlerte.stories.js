import { QcAlerte } from "./QcAlerte";

export default {
    title: "Composants/QcAlerte",
    component: QcAlerte,
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
            message: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>

            <p>Quisque non turpis sed justo dignissim accumsan. Aenean quis massa ut nisi tincidunt suscipit. Pellentesque habitant morbi tristique.</p>
            
            <p>Mauris non felis quis enim tristique suscipit. Sed euismod nisl eu lacus vehicula, nec pulvinar mi fermentum.</p>
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