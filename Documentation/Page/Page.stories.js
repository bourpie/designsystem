export default {
  title: 'Modèles/Page',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return `
      <qc-header></qc-header>
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
        <div>
          <qc-bouton type="session" label="Connexion"></qc-bouton>
        </div>
      </qc-navigation>
      <main>
        <div class="container py-5">
          <div class="row">
            <div class="col-md-10">
           </div>
      </main>

      <qc-footer 
        site-url="https://www.quebec.ca"
        site-nom="Gouvernement du Québec"
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

export const Integration = {
}

Integration.storyName = 'Page complète';