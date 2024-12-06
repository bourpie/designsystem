declare module '*.js' {
    export class QcBouton extends HTMLElement {
        static get observedAttributes(): string[];
        
        // Propriétés
        label: string;
        currenttype: string;
        currentDisplay: string;
        currentSize: string;
        icon: string;
        iconPosition: string;
        href: string;

        // Méthodes
        attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
        render(): void;

        // Getters
        get template(): string;
        
        // Méthodes pour définir les attributs
        setAttribute(name: string, value: string): void;
        getAttribute(name: string): string | null;
    }
}