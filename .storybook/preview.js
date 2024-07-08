import '../styles/globals.css'

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        method: 'configure',
        includeNames: true,
        order: [
          'Introduction',
          'Bases', 
          'Composants',
          ['*', 'QcBouton', ['Docs']], 
          'Formulaires', 
          'Modèles', '*'],
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
