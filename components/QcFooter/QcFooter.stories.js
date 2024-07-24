import { QcFooter } from './QcFooter.js';
import { QcSocial } from '../QcSocial/QcSocial.js';

export default {
  title: 'Modèles/QcFooter',
  component: QcFooter,
  argTypes: {
    siteurl: {
      control: 'text',
      description: 'URL du site',
    },
    sitenom: {
      control: 'text',
      description: 'Nom du site',
    },
  },
  render: ({ ...args }) => {
    return `
      <qc-footer 
          ${args.siteurl ? `site-url="${args.siteurl}"` : ''}
          ${args.sitenom ? `site-nom="${args.sitenom}"` : ''}
      >
        <div slot="liens-principaux">
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <qc-social
            titre="Suivez-nous"
            theme="dark"
            medias='[{"icon":"/assets/icons/facebook-dark.svg","url":"https://facebook.com","text":"Facebook"},{"icon":"/assets/icons/twitterX-dark.svg","url":"https://twitter.com","text":"Twitter"},{"icon":"/assets/icons/youtube-dark.svg","url":"https://linkedin.com","text":"LinkedIn"}]'
          >
          </qc-social>
        </div>
        <div slot="liens-secondaires">
          <ul>
            <li><a href="/accessibilite">Accessibilité</a></li>
            <li><a href="/plan-du-site">Plan du site</a></li>
            <li><a href="/acces-information">Accès à l'information</a></li>
            <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
            <li><a href="/conditions-utilisation">Conditions d'utilisation</a></li>
            <li><a href="/a-propos">À propos</a></li>
          </ul>
        </div>
        <div slot="copyright">
        <a href="/droit-auteur">© Gouvernement du Québec,&nbsp;2024</a>
        </div>
      </qc-footer>
    `;
  },
};

export const Default = {
  args: {
    siteurl: 'https://www.quebec.ca',
    sitenom: 'Gouvernement du Québec',
  },
};
