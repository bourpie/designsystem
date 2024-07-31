import { QcNavigation } from './QcNavigation.js';

export default {
  title: 'Composants/QcNavigation',
  component: QcNavigation,
  render() {
    return `<qc-navigation>
      <ul>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a href="#">Contenu</a>
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
    </qc-navigation>`;
  }
};

export const Default = {
}