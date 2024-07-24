import { QcTdm } from './QcTdm.js';

export default {
  title: 'Composants/QcTdm',
  component: QcTdm,
  argTypes: {
    titre: {
      control: 'text',
      description: 'Titre de la table des matières',
    },
  },
  render: ({ ...args }) => {
    return `
  <qc-tdm titre="${args.titre}"></qc-tdm>
    `;
  },
};

export const AvecBoutonUp = {
  args: {
    titre: 'Table des matières',
  },
  decorators: [
    (Story) => `
<qc-up></qc-up>
<div class="container">
 <qc-tdm titre="Sommaire"></qc-tdm>

  <h2 class="tdm" tdm-titre="Introduction">Introduction</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>

  <h2 class="tdm" tdm-titre="Méthodologie">Méthodologie</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>

  <h2 class="tdm" tdm-titre="Résultats">Résultats</h2>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>
  <p>Ultricies, natoque velit adipiscing elit cubilia habitant fusce sociis tellus dis erat inceptos. Ultricies gravida duis sagittis habitasse venenatis libero malesuada praesent augue consectetur ac. Lobortis aliquam tempor congue mus aenean netus mattis phasellus nulla odio. Ac congue sociis etiam morbi. Iaculis vel, velit vulputate ante. Massa augue sollicitudin eros. Proin aptent platea eros at consequat nec pulvinar purus dis. Convallis; ridiculus a rutrum neque. Magnis lorem elit phasellus maecenas porttitor porttitor magna risus nec. Mattis at fusce consectetur. Interdum ullamcorper vel fusce luctus augue. Erat in nam senectus porta porta ligula mauris blandit turpis. Nisi etiam sem habitasse ligula nibh dignissim ullamcorper amet luctus. Etiam venenatis ligula donec et vulputate eget. Magna torquent.</p>


</div>
    `,
  ]
};

AvecBoutonUp.storyName = 'Avec bouton de défilement';
