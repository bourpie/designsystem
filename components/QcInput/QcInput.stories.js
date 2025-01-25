import { QcInput } from "./QcInput.js";

export default {
  title: 'Formulaires/QcInput',
  component: QcInput,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'multi'],
      description: 'Taille du champ',
    },
    required: {
      control: 'boolean',
      description: 'Champ obligatoire',
    },
    disabled: {
      control: 'boolean',
      description: 'Champ désactivé',
    },
    error: {
      control: 'boolean',
      description: 'Afficher une erreur',
    },
    errorMsg: {
      control: 'text',
      description: 'Message d\'erreur',
    },
    aide: {
      control: 'text',
      description: 'Message d\'aide',
    },
    label: {
      control: 'text',
      description: 'Libellé du champ',
    },
    placeholder: {
      control: 'text',
      description: 'Texte indicatif',
    },
    value: {
      control: 'text',
      description: 'Valeur du champ',
    },
  },
  render: ({ ...args }) => {
    return `
    <qc-input
      ${args.size ? `size="${args.size}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.error ? 'error="true"' : ''}
      ${args.errorMsg ? `errorMsg="${args.errorMsg}"` : ''}
      ${args.aide ? `aide="${args.aide}"` : ''}
      ${args.label ? `label="${args.label}"` : ''}
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}>
    </qc-input>`;
  },
};

export const ParDefaut = {
  args: {
    label: 'Champ par défaut',
    placeholder: 'Saisissez du texte ici...',
  },
};

export const Petit = {
  args: {
    label: 'Petit champ',
    size: 'sm',
    placeholder: 'Saisissez du texte ici...',
  },
};

export const Moyen = {
  args: {
    label: 'Champ moyen',
    size: 'md',
    placeholder: 'Saisissez du texte ici...',
  },
};

export const Grand = {
  args: {
    label: 'Grand champ',
    size: 'lg',
    placeholder: 'Saisissez du texte ici...',
  },
};

export const TresGrand = {
  args: {
    label: 'Très grand champ',
    size: 'xl',
    placeholder: 'Saisissez du texte ici...',
  },
};

export const Multiligne = {
  args: {
    label: 'Champ multiligne',
    size: 'multi',
    placeholder: 'Saisissez du texte ici...',
  },
};

export const Obligatoire = {
  args: {
    label: 'Champ obligatoire',
    required: true,
    placeholder: 'Saisissez du texte ici...',
  },
};

export const Desactive = {
  args: {
    label: 'Champ désactivé',
    disabled: true,
    placeholder: 'Saisissez du texte ici...',
  },
};

export const AvecErreur = {
  args: {
    label: 'Champ avec erreur',
    error: true,
    errorMsg: 'Ce champ est obligatoire',
    placeholder: 'Saisissez du texte ici...',
    required: true,
  },
};

export const AvecAide = {
  args: {
    label: 'Champ avec aide',
    aide: 'Ceci est un message d\'aide',
    placeholder: 'Saisissez du texte ici...',
  },
};