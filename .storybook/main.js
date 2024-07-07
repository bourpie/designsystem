/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.mdx",
    "../documentation/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../documentation/**/*.mdx",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/html-vite",
  },

  docs: {}
};
export default config;
