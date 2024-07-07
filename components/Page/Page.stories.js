import {QcHeader} from '../QcHeader/QcHeader';
import {QcFooter} from '../QcFooter/QcFooter';
import {QcTdm} from '../QcTdm/QcTdm';
import {QcUp} from '../QcUp/QcUp';

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
  

export default {
  title: 'Modèles/Page',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return `
      <qc-header></qc-header>
      <main>
      <div class="container py-5">
        <div class="row">
            <div class="col-md-10">

                <qc-tdm></qc-tdm>

                <!-- Exemple de contenu de la page -->
                <h2 tdm tdm-titre="Introduction">Introduction</h2>
                <p>
                Himenaeos pulvinar varius praesent class at sollicitudin sociosqu. Metus convallis sociis id quam ultrices dapibus aptent id risus ornare cursus. Pretium varius aptent maecenas quis! Placerat habitasse sodales vivamus ipsum bibendum est tincidunt velit curabitur nibh nascetur? Condimentum ultrices aenean rhoncus orci dignissim? Sapien felis malesuada, iaculis aliquam tincidunt id? Urna faucibus libero interdum consectetur. Quam dis hendrerit bibendum urna montes congue aenean mattis rutrum quam sodales! Felis curabitur lectus suspendisse lorem cubilia ornare ante. Aliquet vulputate, gravida class natoque aenean ante. Proin mollis amet laoreet eget. Per ullamcorper cras maecenas est ligula nunc. Himenaeos parturient tempus ipsum sagittis nascetur platea felis fermentum. Nunc pretium et penatibus odio porttitor. Condimentum tortor, lacus donec nostra! Nulla amet platea rhoncus suspendisse ipsum. Eleifend himenaeos arcu venenatis magna proin odio nisi inceptos leo porttitor! Pellentesque fermentum euismod aliquet. Pellentesque, felis cursus vitae at. Curae;.
                </p>
                <p>
                Nascetur felis tempus tempor massa tortor leo. Nam lectus condimentum consectetur sociis nunc ut nisl ornare turpis ante justo. Ullamcorper tincidunt suscipit libero egestas torquent, ac condimentum mi in senectus sollicitudin? Praesent non sem fusce euismod volutpat gravida litora hac, cursus cum habitasse. Blandit netus dapibus cras vehicula penatibus et tellus tempus urna in ac! Tempor laoreet, neque accumsan vestibulum neque dolor sociosqu. Orci semper velit in suscipit suspendisse cum ridiculus iaculis sem maecenas. Ipsum feugiat venenatis.
                </p>
                <p>
                Habitasse, primis pretium platea feugiat augue porttitor cursus porta? Urna lacus scelerisque posuere ut congue condimentum consectetur amet tempor? Non est nam ornare curae; tortor justo non erat proin! Scelerisque purus dolor et dui velit augue parturient. Quis ante nostra sollicitudin ultrices nibh consectetur suscipit etiam ridiculus. Ultricies felis praesent eleifend curabitur inceptos velit pharetra praesent fames. Lacus taciti, ultrices tellus venenatis suspendisse egestas morbi. Nam nam tincidunt orci inceptos potenti dignissim mauris torquent nec cras. Penatibus.
                </p>
                <p>
                Sed amet eu tincidunt aenean luctus lobortis tristique mollis sagittis. Ullamcorper nulla semper porta eleifend mi quis ultricies sociosqu sociosqu mattis. Senectus facilisi eros fringilla fringilla imperdiet. Gravida amet maecenas sagittis natoque duis. Torquent varius condimentum duis proin iaculis? Phasellus, pellentesque eget donec id parturient nibh feugiat nam mauris. Id vulputate phasellus cras maecenas facilisi vulputate nec proin justo senectus. Venenatis molestie, suspendisse fringilla molestie sed nisl vivamus leo tortor. Est vel penatibus nascetur consectetur lacus ultricies convallis praesent vitae curabitur ligula morbi. Eleifend justo potenti tortor mus elit magna habitasse, ridiculus nibh euismod? Quis facilisis tristique consectetur at tempor turpis tempus inceptos diam lorem felis vitae. Erat at ullamcorper lacus sodales fusce lectus blandit. Leo dolor.
                </p>
                <p>
                Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.
                </p>
                
                <h2 tdm tdm-titre="Méthodologie">Méthodologie</h2>
                <p>
                Himenaeos pulvinar varius praesent class at sollicitudin sociosqu. Metus convallis sociis id quam ultrices dapibus aptent id risus ornare cursus. Pretium varius aptent maecenas quis! Placerat habitasse sodales vivamus ipsum bibendum est tincidunt velit curabitur nibh nascetur? Condimentum ultrices aenean rhoncus orci dignissim? Sapien felis malesuada, iaculis aliquam tincidunt id? Urna faucibus libero interdum consectetur. Quam dis hendrerit bibendum urna montes congue aenean mattis rutrum quam sodales! Felis curabitur lectus suspendisse lorem cubilia ornare ante. Aliquet vulputate, gravida class natoque aenean ante. Proin mollis amet laoreet eget. Per ullamcorper cras maecenas est ligula nunc. Himenaeos parturient tempus ipsum sagittis nascetur platea felis fermentum. Nunc pretium et penatibus odio porttitor. Condimentum tortor, lacus donec nostra! Nulla amet platea rhoncus suspendisse ipsum. Eleifend himenaeos arcu venenatis magna proin odio nisi inceptos leo porttitor! Pellentesque fermentum euismod aliquet. Pellentesque, felis cursus vitae at. Curae;.
                </p>
                <p>
                Nascetur felis tempus tempor massa tortor leo. Nam lectus condimentum consectetur sociis nunc ut nisl ornare turpis ante justo. Ullamcorper tincidunt suscipit libero egestas torquent, ac condimentum mi in senectus sollicitudin? Praesent non sem fusce euismod volutpat gravida litora hac, cursus cum habitasse. Blandit netus dapibus cras vehicula penatibus et tellus tempus urna in ac! Tempor laoreet, neque accumsan vestibulum neque dolor sociosqu. Orci semper velit in suscipit suspendisse cum ridiculus iaculis sem maecenas. Ipsum feugiat venenatis.
                </p>
                <p>
                Habitasse, primis pretium platea feugiat augue porttitor cursus porta? Urna lacus scelerisque posuere ut congue condimentum consectetur amet tempor? Non est nam ornare curae; tortor justo non erat proin! Scelerisque purus dolor et dui velit augue parturient. Quis ante nostra sollicitudin ultrices nibh consectetur suscipit etiam ridiculus. Ultricies felis praesent eleifend curabitur inceptos velit pharetra praesent fames. Lacus taciti, ultrices tellus venenatis suspendisse egestas morbi. Nam nam tincidunt orci inceptos potenti dignissim mauris torquent nec cras. Penatibus.
                </p>
                <p>
                Sed amet eu tincidunt aenean luctus lobortis tristique mollis sagittis. Ullamcorper nulla semper porta eleifend mi quis ultricies sociosqu sociosqu mattis. Senectus facilisi eros fringilla fringilla imperdiet. Gravida amet maecenas sagittis natoque duis. Torquent varius condimentum duis proin iaculis? Phasellus, pellentesque eget donec id parturient nibh feugiat nam mauris. Id vulputate phasellus cras maecenas facilisi vulputate nec proin justo senectus. Venenatis molestie, suspendisse fringilla molestie sed nisl vivamus leo tortor. Est vel penatibus nascetur consectetur lacus ultricies convallis praesent vitae curabitur ligula morbi. Eleifend justo potenti tortor mus elit magna habitasse, ridiculus nibh euismod? Quis facilisis tristique consectetur at tempor turpis tempus inceptos diam lorem felis vitae. Erat at ullamcorper lacus sodales fusce lectus blandit. Leo dolor.
                </p>
                <p>
                Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.
                </p>
                
                <h2 tdm tdm-titre="Résultats">Résultats</h2>
                <p>
                Himenaeos pulvinar varius praesent class at sollicitudin sociosqu. Metus convallis sociis id quam ultrices dapibus aptent id risus ornare cursus. Pretium varius aptent maecenas quis! Placerat habitasse sodales vivamus ipsum bibendum est tincidunt velit curabitur nibh nascetur? Condimentum ultrices aenean rhoncus orci dignissim? Sapien felis malesuada, iaculis aliquam tincidunt id? Urna faucibus libero interdum consectetur. Quam dis hendrerit bibendum urna montes congue aenean mattis rutrum quam sodales! Felis curabitur lectus suspendisse lorem cubilia ornare ante. Aliquet vulputate, gravida class natoque aenean ante. Proin mollis amet laoreet eget. Per ullamcorper cras maecenas est ligula nunc. Himenaeos parturient tempus ipsum sagittis nascetur platea felis fermentum. Nunc pretium et penatibus odio porttitor. Condimentum tortor, lacus donec nostra! Nulla amet platea rhoncus suspendisse ipsum. Eleifend himenaeos arcu venenatis magna proin odio nisi inceptos leo porttitor! Pellentesque fermentum euismod aliquet. Pellentesque, felis cursus vitae at. Curae;.
                </p>
                <p>
                Nascetur felis tempus tempor massa tortor leo. Nam lectus condimentum consectetur sociis nunc ut nisl ornare turpis ante justo. Ullamcorper tincidunt suscipit libero egestas torquent, ac condimentum mi in senectus sollicitudin? Praesent non sem fusce euismod volutpat gravida litora hac, cursus cum habitasse. Blandit netus dapibus cras vehicula penatibus et tellus tempus urna in ac! Tempor laoreet, neque accumsan vestibulum neque dolor sociosqu. Orci semper velit in suscipit suspendisse cum ridiculus iaculis sem maecenas. Ipsum feugiat venenatis.
                </p>
                <p>
                Habitasse, primis pretium platea feugiat augue porttitor cursus porta? Urna lacus scelerisque posuere ut congue condimentum consectetur amet tempor? Non est nam ornare curae; tortor justo non erat proin! Scelerisque purus dolor et dui velit augue parturient. Quis ante nostra sollicitudin ultrices nibh consectetur suscipit etiam ridiculus. Ultricies felis praesent eleifend curabitur inceptos velit pharetra praesent fames. Lacus taciti, ultrices tellus venenatis suspendisse egestas morbi. Nam nam tincidunt orci inceptos potenti dignissim mauris torquent nec cras. Penatibus.
                </p>
                <p>
                Sed amet eu tincidunt aenean luctus lobortis tristique mollis sagittis. Ullamcorper nulla semper porta eleifend mi quis ultricies sociosqu sociosqu mattis. Senectus facilisi eros fringilla fringilla imperdiet. Gravida amet maecenas sagittis natoque duis. Torquent varius condimentum duis proin iaculis? Phasellus, pellentesque eget donec id parturient nibh feugiat nam mauris. Id vulputate phasellus cras maecenas facilisi vulputate nec proin justo senectus. Venenatis molestie, suspendisse fringilla molestie sed nisl vivamus leo tortor. Est vel penatibus nascetur consectetur lacus ultricies convallis praesent vitae curabitur ligula morbi. Eleifend justo potenti tortor mus elit magna habitasse, ridiculus nibh euismod? Quis facilisis tristique consectetur at tempor turpis tempus inceptos diam lorem felis vitae. Erat at ullamcorper lacus sodales fusce lectus blandit. Leo dolor.
                </p>
                <p>
                Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.
                </p>
                </div>
                </div>
           </div>
      </main>
      <qc-up></qc-up>
      <qc-footer 
        site-url='https://www.quebec.ca'
        site-nom='Québec.ca'
        mainlinks='${JSON.stringify(mainLinks).replace(/'/g, "&apos;")}' 
        centerlinks='${JSON.stringify(centerLinks).replace(/'/g, "&apos;")}' 
       >
       </qc-footer>
    `;
  },
};

export const Integration = {
}

Integration.storyName = 'Page complète';