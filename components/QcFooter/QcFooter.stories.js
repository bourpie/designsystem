import { QcFooter } from './QcFooter.js';
import { QcSocial } from '../QcSocial/QcSocial.js';

const mainLinks = [
  {
    "title": "Informations et services",
    "links": [
      { "label": "Agriculture, environnement et ressources naturelles", "href": "/agriculture-environnement-et-ressources-naturelles" },
      { "label": "Culture", "href": "/culture" },
      { "label": "Éducation", "href": "/education" },
      { "label": "Emploi", "href": "/emploi" },
      { "label": "Entreprises", "href": "/entreprises-et-travailleurs-autonomes" },
      { "label": "Famille et soutien aux personnes", "href": "/famille-et-soutien-aux-personnes" }
    ]
  },
  {
    "title": "Gouvernement",
    "links": [
      { "label": "Ministères et organismes", "href": "/gouvernement/ministeres-et-organismes" },
      { "label": "Services Québec", "href": "/services-quebec" },
      { "label": "Gouvernement ouvert", "href": "/gouvernement/gouvernement-ouvert" },
      { "label": "Travailler au gouvernement", "href": "/gouvernement/travailler-gouvernement" },
      { "label": "Salle de nouvelles", "href": "/nouvelles" },
      { "label": "Lois et règlements", "href": "http://www.publicationsduquebec.gouv.qc.ca/lois-et-reglements/" }
    ]
  },
  {
    "title": "Nous joindre",
    "links": [
      { "label": "Renseignements généraux", "href": "/nous-joindre/renseignements-generaux" },
      { "label": "Bureaux de services", "href": "https://www.localisateur.servicesquebec.gouv.qc.ca/" }
    ]
  },
];

const centerLinks = [
  {
    "title": "Liens centrés",
    "links": [
      { "label": "Accessibilité", "href": "/accessibilite" },
      { "label": "Plan du site", "href": "/plan-du-site" },
      { "label": "Accès à l'information", "href": "/acces-information" },
      { "label": "Politique de confidentialité", "href": "/politique-confidentialite" },
      { "label": "Conditions d'utilisation", "href": "/conditions-utilisation" },
      { "label": "À propos", "href": "/a-propos" }
    ]
  }
];

const socialMedias = [
  {
    "icon": "/assets/icons/facebook-dark.svg",
    "url": "https://facebook.com",
    "text": "Facebook"
  },
  {
    "icon": "/assets/icons/twitterX-dark.svg",
    "url": "https://twitter.com",
    "text": "Twitter"
  },
  {
    "icon": "/assets/icons/youtube-dark.svg",
    "url": "https://linkedin.com",
    "text": "LinkedIn"
  }
];

export default {
  title: 'Modèles/QcFooter',
  component: QcFooter,
  tags: ['autodocs'],
  argTypes: {
    siteurl: {
      control: 'text',
      description: 'URL du site',
    },
    sitename: {
      control: 'text',
      description: 'Nom du site',
    },
    mainlinks: {
      control: 'array',
      description: 'Liens principaux',
    },
    centerlinks: {
      control: 'array',
      description: 'Liens centrés',
    },
    copyright: {
      control: 'text',
      description: 'Copyright',
    },
  },
  render: ({ mainlinks, centerlinks, copyright, showsocial, socialmedias }) => {
    return `
      <qc-footer 
        site-url='https://www.quebec.ca'
        site-nom='Québec.ca'
        mainlinks='${JSON.stringify(mainlinks).replace(/'/g, "&apos;")}' 
        centerlinks='${JSON.stringify(centerlinks).replace(/'/g, "&apos;")}' 
        copyright='${copyright.replace(/'/g, "&apos;")}'
      >
        <qc-social
          titre="Suivez-nous"
          theme="dark"
          medias='${JSON.stringify(socialmedias).replace(/'/g, "&apos;")}'
        >
        </qc-social>
      </qc-footer>
    `;
  },
};

export const Default = {
  args: {
    mainlinks: mainLinks,
    centerlinks: centerLinks,
    copyright: '© 2024 Gouvernement du Québec. Tous droits réservés.',
    socialmedias: socialMedias,
  },
};
