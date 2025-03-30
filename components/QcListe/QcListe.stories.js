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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Taille du composant (sm: 62px, md: 156px, lg: 250px, xl: 100%)'
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
      ${args.size ? `size="${args.size}"` : ''}
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
  size: 'md',
  options: [
    { value: 'qc', label: 'Québec' },
    { value: 'on', label: 'Ontario' },
    { value: 'bc', label: 'Colombie-Britannique' },
    { value: 'ab', label: 'Alberta' },
    { value: 'mb', label: 'Manitoba' }
  ]
};

// Ajouter les stories pour les différentes tailles
export const TaillePetite = Template.bind({});
TaillePetite.args = {
  label: 'Quantité',
  placeholder: 'Qté',
  name: 'quantity',
  size: 'sm', // 62px
  options: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
  ]
};

export const TailleMoyenne = Template.bind({});
TailleMoyenne.args = {
  label: 'Mois',
  placeholder: 'Choisir',
  name: 'month',
  size: 'md', // 156px
  options: [
    { value: '01', label: 'Janvier' },
    { value: '02', label: 'Février' },
    { value: '03', label: 'Mars' },
    { value: '04', label: 'Avril' },
    { value: '05', label: 'Mai' }
  ]
};

export const TailleGrande = Template.bind({});
TailleGrande.args = {
  label: 'Province',
  placeholder: 'Choisissez une province',
  name: 'province',
  size: 'lg', // 250px
  options: [
    { value: 'qc', label: 'Québec' },
    { value: 'on', label: 'Ontario' },
    { value: 'bc', label: 'Colombie-Britannique' },
    { value: 'ab', label: 'Alberta' },
    { value: 'mb', label: 'Manitoba' }
  ]
};

export const TailleExtraLarge = Template.bind({});
TailleExtraLarge.args = {
  label: 'Pays',
  placeholder: 'Choisissez un pays',
  name: 'country',
  size: 'xl', // 528px
  options: [
    { value: 'ca', label: 'Canada' },
    { value: 'us', label: 'États-Unis' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Allemagne' },
    { value: 'es', label: 'Espagne' }
  ]
};

// Story qui montre toutes les tailles côte à côte
export const ComparaisonTailles = () => `
  <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 100%;">
    <div>
      <h3>Taille Small (sm) - 62px</h3>
      ${Template({
        label: 'Quantité',
        placeholder: 'Qté',
        size: 'sm',
        options: [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' }
        ]
      })}
    </div>
    
    <div>
      <h3>Taille Medium (md) - 156px</h3>
      ${Template({
        label: 'Mois',
        placeholder: 'Choisir',
        size: 'md',
        options: [
          { value: '01', label: 'Janvier' },
          { value: '02', label: 'Février' },
          { value: '03', label: 'Mars' }
        ]
      })}
    </div>
    
    <div>
      <h3>Taille Large (lg) - 250px</h3>
      ${Template({
        label: 'Province',
        placeholder: 'Choisir',
        size: 'lg',
        options: [
          { value: 'qc', label: 'Québec' },
          { value: 'on', label: 'Ontario' },
          { value: 'bc', label: 'Colombie-Britannique' }
        ]
      })}
    </div>
    
    <div>
      <h3>Taille Extra Large (xl) - 100%</h3>
      ${Template({
        label: 'Pays',
        placeholder: 'Choisir',
        size: 'xl',
        options: [
          { value: 'ca', label: 'Canada' },
          { value: 'us', label: 'États-Unis' },
          { value: 'fr', label: 'France' }
        ]
      })}
    </div>
  </div>
`;

// Conserver les stories existantes...
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