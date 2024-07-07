import '../styles/globals.css'

/** @type { import('@storybook/html').Preview } */
const preview = {
  options: {
    storySort: {
      order: ['Bases', 'Composants', 'Formulaires', 'Modèles', '*'],
      method: 'alphabetical',
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
