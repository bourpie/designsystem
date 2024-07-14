import '../styles/globals.css'

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
            ]
          ], 
          'Formulaires', 
          'Modèles', 
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

