import { QcUp } from './QcUp.js';

export default {
  title: 'Composants/QcUp',
  component: QcUp,
};

const Template = () => {
  return `
    <qc-up></qc-up>
    <div style="height: 3000px; padding: 20px;">
      <h1>Faites défiler vers le bas pour voir le bouton</h1>
      <p>Continuer à défiler ...</p>

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
  `;
};

export const Default = Template.bind({});
