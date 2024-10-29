import { QcTag } from './QcTag';

export default {
  title: 'Composants/QcTag',
  component: QcTag,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    href: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },  // Le href n'est pertinent que pour les liens
    },
    type: { 
      control: 'select', 
      options: ['link', 'checkbox'],
      description: 'Le type de champ de saisie.' 
    },

  },
  render({label, href, type}) {
    // On s'assure que l'attribut href n'est pas ajouté pour les checkboxes
    return `
      <qc-tag label="${label}" ${type === 'link' ? `href="${href}"` : ''} type="${type}"></qc-tag>
    `;
  },
};

export const Default = {
  args: {
    label: 'Étiquette',
    href: 'https://www.google.fr',
    type: 'link',  // Par défaut, on utilise un lien
  },
};

Default.storyName = 'Étiquette';

export const Checkbox = {
  args: {
    label: 'Accepter les conditions',
    type: 'checkbox',  // Cette story affiche une case à cocher
  },
};

Checkbox.storyName = 'Case à cocher';
