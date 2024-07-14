import { QcInput } from "./QcInput.js";

export default {
    title: 'Formulaires/QcInput',
    component: QcInput,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local', 'month', 'week'] },
        size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'multi'] },
        value: { control: 'text' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        aide: { control: 'text' },
        error: { control: 'boolean' },
        errorMsg: { control: 'text' },
        placeholder: { control: 'text' },
    },
    render({...args}) {
        const qcInputTemplate = `
            <qc-input
                ${args.label ? `label="${args.label}"` : ''} 
                ${args.size ? `size="${args.size}"` : ''} 
                ${args.type ? `type="${args.type}"` : ''}
                ${args.value ? `value="${args.value}"` : ''}
                ${args.disabled ? `disabled` : ''}
                ${args.required ? `required` : ''}
                ${args.aide ? `aide="${args.aide}"` : ''}
                ${args.error ? `error` : ''}
                ${args.errorMsg ? `errorMsg="${args.errorMsg}"` : ''}
                ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
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

export const Erreur = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        error: true,
        errorMsg: 'Ce champ est obligatoire',
        required: true,
    }
}

Erreur.storyName = 'Champ avec erreur';