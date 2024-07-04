import './QcFooter.css';
import { QcFooter } from './QcFooter.js'; 

export default {
  title: 'Modules/QcFooter',
  component: QcFooter,
  argTypes: {
    mainlinks: {
      control: 'object',
      description: 'Liens principaux',
    },
    centerlinks: {
      control: 'object',
      description: 'Liens centrés',
    },
    copyright: {
      control: 'text',
      description: 'Copyright',
    },
  },
  render: ({ mainlinks, centerlinks, copyright }) => {
    return `
      <qc-footer 
        mainlinks='${JSON.stringify(mainlinks)}' 
        centerlinks='${JSON.stringify(centerlinks)}' 
        copyright='${copyright}'
      ></qc-footer>
    `;
  },
};

export const Default = {
  args: {
    mainlinks: [
      {
        title: 'Liens principaux',
        links: [
          { label: 'Accueil', href: '#' },
          { label: 'A propos', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      }
    ],
    centerlinks: [
      {
        title: 'Liens centrés',
        links: [
          { label: 'Politique de confidentialité', href: '#' }
        ]
      }
    ],
    copyright: '© 2024 Gouvernement du Québec. Tous droits réservés.',
  },
};
