import { Title } from '@storybook/blocks';
import { QcBouton } from './QcBouton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Composants/QcBouton',
  tags: ['autodocs'],
  component: QcBouton,
  argTypes: {
    type: {
      control: 'select',
      options: ['principal', 'secondaire', 'tertiaire', 'avertissement'],
    },
    size: {
      control: 'select',
      options: ['normal', 'compact'],
    },
    display: {
      control: 'select',
      options: ['inline-block', 'block'],
    },

    icon: {
      control: "select",
      options: [
        "lnr-home",
        "lnr-apartment",
        "lnr-pencil",
        "lnr-magic-wand",
        "lnr-drop",
        "lnr-lighter",
        "lnr-poop",
        "lnr-sun",
        "lnr-moon",
        "lnr-cloud",
        "lnr-cloud-upload",
        "lnr-cloud-download",
        "lnr-cloud-sync",
        "lnr-cloud-check",
        "lnr-database",
        "lnr-lock",
        "lnr-cog",
        "lnr-trash",
        "lnr-dice",
        "lnr-heart",
        "lnr-star",
        "lnr-star-half",
        "lnr-star-empty",
        "lnr-flag",
        "lnr-envelope",
        "lnr-paperclip",
        "lnr-inbox",
        "lnr-eye",
        "lnr-printer",
        "lnr-file-empty",
        "lnr-file-add",
        "lnr-enter",
        "lnr-exit",
        "lnr-graduation-hat",
        "lnr-license",
        "lnr-music-note",
        "lnr-film-play",
        "lnr-camera-video",
        "lnr-camera",
        "lnr-picture",
        "lnr-book",
        "lnr-bookmark",
        "lnr-user",
        "lnr-users",
        "lnr-shirt",
        "lnr-store",
        "lnr-cart",
        "lnr-tag",
        "lnr-phone-handset",
        "lnr-phone",
        "lnr-pushpin",
        "lnr-map-marker",
        "lnr-map",
        "lnr-location",
        "lnr-calendar-full",
        "lnr-keyboard",
        "lnr-spell-check",
        "lnr-screen",
        "lnr-smartphone",
        "lnr-tablet",
        "lnr-laptop",
        "lnr-laptop-phone",
        "lnr-power-switch",
        "lnr-bubble",
        "lnr-heart-pulse",
        "lnr-construction",
        "lnr-pie-chart",
        "lnr-chart-bars",
        "lnr-gift",
        "lnr-diamond",
        "lnr-linearicons",
        "lnr-dinner",
        "lnr-coffee-cup",
        "lnr-leaf",
        "lnr-paw",
        "lnr-rocket",
        "lnr-briefcase",
        "lnr-bus",
        "lnr-car",
        "lnr-train",
        "lnr-bicycle",
        "lnr-wheelchair",
        "lnr-select",
        "lnr-earth",
        "lnr-smile",
        "lnr-sad",
        "lnr-neutral",
        "lnr-mustache",
        "lnr-alarm",
        "lnr-bullhorn",
        "lnr-volume-high",
        "lnr-volume-medium",
        "lnr-volume-low",
        "lnr-volume",
        "lnr-mic",
        "lnr-hourglass",
        "lnr-undo",
        "lnr-redo",
        "lnr-sync",
        "lnr-history",
        "lnr-clock",
        "lnr-download",
        "lnr-upload",
        "lnr-enter-down",
        "lnr-exit-up",
        "lnr-bug",
        "lnr-code",
        "lnr-link",
        "lnr-unlink",
        "lnr-thumbs-up",
        "lnr-thumbs-down",
        "lnr-magnifier",
        "lnr-cross",
        "lnr-menu",
        "lnr-list",
        "lnr-chevron-up",
        "lnr-chevron-down",
        "lnr-chevron-left",
        "lnr-chevron-right",
        "lnr-arrow-up",
        "lnr-arrow-down",
        "lnr-arrow-left",
        "lnr-arrow-right",
        "lnr-move",
        "lnr-warning",
        "lnr-question-circle",
        "lnr-menu-circle",
        "lnr-checkmark-circle",
        "lnr-cross-circle",
        "lnr-plus-circle",
        "lnr-circle-minus",
        "lnr-arrow-up-circle",
        "lnr-arrow-down-circle",
        "lnr-arrow-left-circle",
        "lnr-arrow-right-circle",
        "lnr-chevron-up-circle",
        "lnr-chevron-down-circle",
        "lnr-chevron-left-circle",
        "lnr-chevron-right-circle",
        "lnr-crop",
        "lnr-frame-expand",
        "lnr-frame-contract",
        "lnr-layers",
        "lnr-funnel",
        "lnr-text-format",
        "lnr-text-format-remove",
        "lnr-text-size",
        "lnr-bold",
        "lnr-italic",
        "lnr-underline",
        "lnr-strikethrough",
        "lnr-highlight",
        "lnr-text-align-left",
        "lnr-text-align-center",
        "lnr-text-align-right",
        "lnr-text-align-justify",
        "lnr-line-spacing",
        "lnr-indent-increase",
        "lnr-indent-decrease",
        "lnr-pilcrow",
        "lnr-direction-ltr",
        "lnr-direction-rtl",
        "lnr-page-break",
        "lnr-sort-alpha-asc",
        "lnr-sort-amount-asc",
        "lnr-hand",
        "lnr-pointer-up",
        "lnr-pointer-right",
        "lnr-pointer-down",
        "lnr-pointer-left"
      ]
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    }
  },
  render: ({ label, ...args }) => {
    return `
      <qc-bouton 
        ${args.size ? `size="${args.size}"` : ''} 
        ${args.href ? `href="${args.href}"` : ''} 
        ${args.type ? `type="${args.type}"` : ''} 
        ${args.display ? `display="${args.display}"` : ''} 
        ${args.icon ? `icon="${args.icon}"` : ''} 
        ${args.iconPosition ? `icon-position="${args.iconPosition}"` : ''}
        label="${label}">
      </qc-bouton>    
      `;
  },
};

export const Primaire = {
  args: {
    label: 'Primaire',
  }
};

Primaire.storyName = 'Bouton principal';

export const Secondaire = {
  args: {
    label: 'Secondaire',
    type: 'secondaire',
  }
};

Secondaire.storyName = 'Bouton secondaire';

export const Tertiaire = {
  args: {
    label: 'Tertiaire',
    type: 'tertiaire',
  },
};

Tertiaire.storyName = 'Bouton tertiaire';

export const Avertissement = {
  args: {
    label: 'Avertissement',
    type: 'avertissement',
  },
};

Avertissement.storyName = 'Bouton avertissement';

export const Block = {
  args: {
    label: 'Bloc',
    type: 'principal',
    href: 'https://www.google.com/',
    display: 'block',
  },
};

Block.storyName = 'Bouton pleine largeur';

export const IconLeft = {
  args: {
    label: 'Précédent',
    type: 'principal',
    icon: 'lnr-arrow-left',
    iconPosition: 'left',
  },
};

IconLeft.storyName = 'Icône à gauche';

export const IconRight = {
  args: {
    label: 'Suivant',
    type: 'principal',
    icon: 'lnr-arrow-right',
    iconPosition: 'right',
  },
};

IconRight.storyName = 'Icône à droite';



