import { QcListe } from './QcListe.js';

export default {
  title: 'Formulaires/QcListe',
  component: 'qc-liste',
  argTypes: {
    label: {
      control: 'text',
      description: 'Libellé du champ'
    },
    placeholder: {
      control: 'text',
      description: 'Texte affiché quand aucune option n\'est sélectionnée'
    },
    value: {
      control: 'text',
      description: 'Valeur sélectionnée'
    },
    name: {
      control: 'text', 
      description: 'Nom du champ (pour les formulaires)'
    },
    required: {
      control: 'boolean',
      description: 'Indique si le champ est obligatoire'
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le champ'
    },
    error: {
      control: 'boolean',
      description: 'Affiche le champ en erreur'
    },
    errorMsg: {
      control: 'text',
      description: 'Message d\'erreur'
    },
    options: {
      control: 'object',
      description: 'Options de la liste'
    }
  }
};

const Template = (args) => {
  return `
    <qc-liste
      ${args.label ? `label="${args.label}"` : ''}
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.name ? `name="${args.name}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.error ? 'error' : ''}
      ${args.errorMsg ? `errorMsg="${args.errorMsg}"` : ''}
      options='${JSON.stringify(args.options)}'>
    </qc-liste>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  label: 'Province',
  placeholder: 'Choisissez une province',
  name: 'province',
  options: [
    { value: 'qc', label: 'Québec' },
    { value: 'on', label: 'Ontario' },
    { value: 'bc', label: 'Colombie-Britannique' },
    { value: 'ab', label: 'Alberta' },
    { value: 'mb', label: 'Manitoba' }
  ]
};

export const AvecValeurPreselectionee = Template.bind({});
AvecValeurPreselectionee.args = {
  label: 'Province',
  placeholder: 'Choisissez une province',
  name: 'province',
  value: 'qc',
  options: [
    { value: 'qc', label: 'Québec' },
    { value: 'on', label: 'Ontario' },
    { value: 'bc', label: 'Colombie-Britannique' },
    { value: 'ab', label: 'Alberta' },
    { value: 'mb', label: 'Manitoba' }
  ]
};

export const Desactive = Template.bind({});
Desactive.args = {
  label: 'Province',
  placeholder: 'Choisissez une province',
  name: 'province',
  disabled: true,
  options: [
    { value: 'qc', label: 'Québec' },
    { value: 'on', label: 'Ontario' },
    { value: 'bc', label: 'Colombie-Britannique' }
  ]
};

export const Obligatoire = Template.bind({});
Obligatoire.args = {
  label: 'Province',
  placeholder: 'Choisissez une province',
  name: 'province',
  required: true,
  options: [
    { value: 'qc', label: 'Québec' },
    { value: 'on', label: 'Ontario' },
    { value: 'bc', label: 'Colombie-Britannique' }
  ]
};

export const EnErreur = Template.bind({});
EnErreur.args = {
  label: 'Province',
  placeholder: 'Choisissez une province',
  name: 'province',
  error: true,
  errorMsg: 'Veuillez sélectionner une province',
  options: [
    { value: 'qc', label: 'Québec' },
    { value: 'on', label: 'Ontario' },
    { value: 'bc', label: 'Colombie-Britannique' }
  ]
};

export const OptionsDesactivees = Template.bind({});
OptionsDesactivees.args = {
  label: 'Province',
  placeholder: 'Choisissez une province',
  name: 'province',
  options: [
    { value: 'qc', label: 'Québec' },
    { value: 'on', label: 'Ontario', disabled: true },
    { value: 'bc', label: 'Colombie-Britannique' },
    { value: 'ab', label: 'Alberta', disabled: true }
  ]
};

export const NombreusesOptions = Template.bind({});
NombreusesOptions.args = {
  label: 'Pays',
  placeholder: 'Choisissez un pays',
  name: 'pays',
  options: [
    { value: 'ca', label: 'Canada' },
    { value: 'us', label: 'États-Unis' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Allemagne' },
    { value: 'es', label: 'Espagne' },
    { value: 'it', label: 'Italie' },
    { value: 'jp', label: 'Japon' },
    { value: 'cn', label: 'Chine' },
    { value: 'au', label: 'Australie' },
    { value: 'br', label: 'Brésil' },
    { value: 'mx', label: 'Mexique' },
    { value: 'in', label: 'Inde' }
  ]
};

export const DansUnFormulaire = () => `
  <form style="max-width: 600px; padding: 1rem; border: 1px solid #ccc;">
    <div style="margin-bottom: 1rem;">
      <label for="nom">Nom</label>
      <input id="nom" name="nom" type="text" style="display: block; width: 100%; padding: 0.5rem; border: 1px solid #ccc;">
    </div>
    
    <div style="margin-bottom: 1rem;">
      ${Template({
        label: 'Province',
        placeholder: 'Choisissez une province',
        name: 'province',
        required: true,
        options: [
          { value: 'qc', label: 'Québec' },
          { value: 'on', label: 'Ontario' },
          { value: 'bc', label: 'Colombie-Britannique' }
        ]
      })}
    </div>
    
    <button type="submit" style="padding: 0.5rem 1rem; background-color: #4A98D9; color: white; border: none;">
      Soumettre
    </button>
  </form>
`;