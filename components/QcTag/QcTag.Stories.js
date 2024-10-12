import { QcTag } from './QcTag';

export default {
  title: 'Composants/QcTag',
  tags: ['autodocs'],
  component: QcTag,
  argTypes: {
    tag: {
      control: 'text',
      description: 'Nom du tag',
    },
  },
  render: ({ tag, ...args }) => {
    return `
      <qc-tag tag="${tag}"${args.tag ? ` size="${args.tag}"` : ''}></qc-tag>    
      `;
  },
};

export const Primaire = {
  args: {
    tag: 'Mon étiquette',
  }
};

Primaire.storyName = 'Bouton principal';



