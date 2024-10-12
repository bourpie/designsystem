import { QcEtiquette } from './QcEtiquette';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Composants/QcEtiquette',
  component: QcEtiquette,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  render: ({ label }) => {
    return `
      <qc-etiquette label="${label}"></qc-etiquette>    
      `;
  },
};

export const Default = {
  args: {
    label: 'Principal',
  }
};