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
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'date', 'search', 'tel', 'url'],
      description: 'Type de champ',
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
    maxLength: {
      control: 'number',
      description: 'Nombre maximum de caractères',
     },
     maxlengthTxt: {
      control: 'text', 
      description: 'Template du texte pour le compteur. Utilisez {count} pour afficher le nombre',
     },
  },
  render: ({ ...args }) => {
    return `
    <qc-input
      ${args.size ? `size="${args.size}"` : ''}
      ${args.type ? `type="${args.type}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.error ? 'error="true"' : ''}
      ${args.errorMsg ? `errorMsg="${args.errorMsg}"` : ''}
      ${args.aide ? `aide="${args.aide}"` : ''}
      ${args.label ? `label="${args.label}"` : ''}
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.maxLength ? `maxLength="${args.maxLength}"` : ''}
      ${args.maxlengthTxt ? `maxlengthTxt="${args.maxlengthTxt}"` : ''}>
    </qc-input>`;
  },
};

// Ajouter à la suite des autres stories existantes

export const TypesChamps = {
  args: {
    label: 'Champ par défaut (texte)',
    placeholder: 'Saisissez du texte ici...',
  },
};

export const MotDePasse = {
  args: {
    label: 'Mot de passe',
    type: 'password',
    placeholder: 'Entrez votre mot de passe',
  },
};

export const Courriel = {
  args: {
    label: 'Adresse courriel',
    type: 'email',
    placeholder: 'exemple@domaine.com',
  },
};

export const Numerique = {
  args: {
    label: 'Valeur numérique',
    type: 'number',
    placeholder: '0',
    size: 'sm',
  },
};

export const DatePicker = {
  args: {
    label: 'Date',
    type: 'date',
    size: 'md',
  },
};

export const Recherche = {
  args: {
    label: 'Recherche',
    type: 'search',
    placeholder: 'Rechercher...',
    size: 'xl',
  },
};

export const Telephone = {
  args: {
    label: 'Numéro de téléphone',
    type: 'tel',
    placeholder: '(000) 000-0000',
    size: 'lg',
  },
};