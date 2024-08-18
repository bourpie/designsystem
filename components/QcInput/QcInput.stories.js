import { QcInput } from "./QcInput.js";

export default {
    title: 'Formulaires/QcInput',
    component: QcInput,
    tags: ['autodocs'],
    argTypes: {
        label: { 
          control: 'text', 
          description: 'Le texte de l\'étiquette pour le champ de saisie.' 
        },
        type: { 
          control: 'select', 
          options: ['', 'text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local', 'month', 'week'],
          description: 'Le type de champ de saisie.' 
        },
        size: { 
          control: 'select', 
          options: ['sm', 'md', 'lg', 'xl', 'multi'],
          description: 'La taille du champ de saisie.' 
        },
        value: { 
          control: 'text', 
          description: 'La valeur actuelle du champ de saisie.' 
        },
        disabled: { 
          control: 'boolean', 
          description: 'Désactive le champ de saisie si vrai.' 
        },
        required: { 
          control: 'boolean', 
          description: 'Rend le champ de saisie obligatoire si vrai.' 
        },
        aide: { 
          control: 'text', 
          description: 'Texte d\'aide affiché sous le champ de saisie.' 
        },
        error: { 
          control: 'boolean', 
          description: 'Affiche un état d\'erreur si vrai.' 
        },
        errorMsg: { 
          control: 'text', 
          description: 'Le message d\'erreur à afficher en cas d\'erreur.' 
        },
        placeholder: { 
          control: 'text', 
          description: 'Le texte d\'espace réservé à afficher dans le champ de saisie.' 
        },
        maxlength: { 
          control: 'number', 
          description: 'La longueur maximale autorisée pour le champ de saisie.' 
        },
        maxlengthInfo: { 
          control: 'text', 
          description: 'Texte d\'information à utiliser avec le champ de taille multi pour indiquer la longueur maximale du champ de saisie.' 
        },
    }, 
    render({...args}) {
        const qcInputTemplate = `
            <qc-input
                ${args.label ? `label="${args.label}"` : ''} 
                ${args.size ? `size="${args.size}"` : ''} 
                ${args.type ? `type="${args.type}"` : ''}
                ${args.value ? `name="${args.name}"` : ''}
                ${args.value ? `value="${args.value}"` : ''}
                ${args.disabled ? `disabled` : ''}
                ${args.required ? `required` : ''}
                ${args.aide ? `aide="${args.aide}"` : ''}
                ${args.error ? `error` : ''}
                ${args.errorMsg ? `errorMsg="${args.errorMsg}"` : ''}
                ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
                ${args.maxlength ? `maxlength="${args.maxlength}"` : ''}
                ${args.maxlengthInfo ? `maxlength-info="${args.maxlengthInfo}"` : ''}
            ></qc-input>
        `;
        return qcInputTemplate.replace(/\s+/g, ' ').trim();
    },
}

export const Default = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
    }
}

Default.storyName = 'Champ de type texte';

export const Requis = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        required: true,
    }
}

Requis.storyName = 'Champ requis';

export const Erreur = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        error: true,
        errorMsg: 'Ce champ est obligatoire',
        required: true,
    }
}

export const Multi = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        size:'multi',
        maxlength: 500,
        maxlengthInfo: 'Caractères maximum :',

    }
}

Multi.storyName = 'Champ multi lignes';
