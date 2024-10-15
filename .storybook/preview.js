import '../styles/globals.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        includeNames: true,
        order: [
          'Introduction',
          'Bases',
          'Composants',
          [
            '*',
            'QcBouton',
            [
              'Docs',
              '*'
            ],
            'QcAccordeon',
            [
              'Docs',
              '*'
            ],
            'QcTdm',
            [
              'Docs',
              '*'
            ],
            'QcNavigation',
            [
              'Docs',
              '*'
            ],
            'QcRecherche',
            [
              'Docs',
              '*'
            ],
          ],
          'Formulaires',
          'Modèles',
          [
            '*',
            'QcHeader',
            [
              'Docs',
              '*'
            ],
            'QcFooter',
            [
              'Docs',
              '*'
            ]
          ],
          '*'
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;