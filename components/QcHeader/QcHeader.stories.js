import { QcHeader } from "./QcHeader";

export default {
    title: "Modèles/QcHeader",
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

    export const AvecAvis = {
        args: {
            placeholder: "Rechercher un produit",
            btnlabel: "Rechercher",
            variant: "dark",
        },
        decorators: [
            (Story) => `
                ${Story()}
                <qc-alerte 
                    type="avertissement" 
                    fermeture="oui" message="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>">
            </qc-alerte>
            `,
        ]
    };

    AvecAvis.storyName = "Avec une alerte";

    
    export const AvecNavigation = {
        args: {
            placeholder: "Rechercher un produit",
            btnlabel: "Rechercher",
            variant: "dark",
        },
        decorators: [
            (Story) => `
                ${Story()}
                <qc-navigation>
                    <ul>
                    <li>
                        <a href="#">À propos</a>
                    </li>
                    <li>
                        <a>Contenu</a>
                    </li>
                    <li>
                        <a href="#">Design</a>
                    </li>
                    <li>
                        <a href="#">Ressources</a>
                        <button>
                        <span class="lnr lnr-chevron-down"></span>
                        </button>
                        <ul>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Vidéos</a></li>
                        </ul>
                    </li>
                    </ul>
                </qc-navigation>
                <qc-alerte 
                    type="avertissement" 
                    fermeture="oui" message="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. <a href='#'>Cras venenatis euismod</a> malesuada.</p>">
            </qc-alerte>
            `,
        ]
    };

    AvecNavigation.storyName = "Avec navigation";
