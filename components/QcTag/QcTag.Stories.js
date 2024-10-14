import { QcTag } from './QcTag';

export default {
  title: 'Composants/QcTag',
  tags: ['autodocs'],
  component: QcTag,
  argTypes: {
    label: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
  render({label,href,...args}) {
    return `
      <qc-tag label="${label}" href="${href}"></qc-tag>    
      `;
  },
};

export const Default = {
  args: {
      label: 'Étiquette',
      href: 'https://www.google.fr',
  }
}

Default.storyName = 'Étiquette';