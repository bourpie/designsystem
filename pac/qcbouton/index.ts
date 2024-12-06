import { QcBouton } from '../../components/QcBouton/index.js';
import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class qcbouton implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _container: HTMLDivElement;
    private _button: QcBouton;
    private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: () => void;

    constructor() {}

    public init(context: ComponentFramework.Context<IInputs>, 
                notifyOutputChanged: () => void, 
                state: ComponentFramework.Dictionary, 
                container: HTMLDivElement): void {
        this._context = context;
        this._container = container;
        this._notifyOutputChanged = notifyOutputChanged;

        // Création du composant QcBouton
        this._button = document.createElement('qc-bouton') as QcBouton;
        
        // Configuration des attributs à partir du contexte
        if (context.parameters.label) {
            this._button.setAttribute('label', context.parameters.label.raw || '');
        }
        
        if (context.parameters.type) {
            this._button.setAttribute('type', context.parameters.type.raw || 'principal');
        }

        if (context.parameters.icon) {
            this._button.setAttribute('icon', context.parameters.icon.raw || '');
            this._button.setAttribute('icon-position', context.parameters.iconPosition?.raw || 'left');
        }

        if (context.parameters.href) {
            this._button.setAttribute('href', context.parameters.href.raw || '');
        }

        // Ajout des écouteurs d'événements
        this._button.addEventListener('click', this._onButtonClick.bind(this));

        // Ajout du bouton au conteneur
        this._container.appendChild(this._button);
    }

    private _onButtonClick(event: Event): void {
        // Gestion du clic
        if (this._context.parameters.onClick) {
            // Déclencher l'événement défini dans PowerApps
            this._notifyOutputChanged();
        }
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._context = context;

        // Mise à jour des attributs si les valeurs ont changé
        if (context.parameters.label) {
            this._button.setAttribute('label', context.parameters.label.raw || '');
        }
        
        if (context.parameters.type) {
            this._button.setAttribute('type', context.parameters.type.raw || 'principal');
        }

        if (context.parameters.icon) {
            this._button.setAttribute('icon', context.parameters.icon.raw || '');
            this._button.setAttribute('icon-position', context.parameters.iconPosition?.raw || 'left');
        }

        if (context.parameters.href) {
            this._button.setAttribute('href', context.parameters.href.raw || '');
        }
    }

    public getOutputs(): IOutputs {
        // Retourner les valeurs de sortie si nécessaire
        return {};
    }

    public destroy(): void {
        // Nettoyage des écouteurs d'événements
        if (this._button) {
            this._button.removeEventListener('click', this._onButtonClick.bind(this));
        }
    }
}