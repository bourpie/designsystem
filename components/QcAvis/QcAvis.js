import './QcAvis.css'

class QcAvis extends HTMLElement {

    static get observedAttributes() {
        return ['titre', 'contenu', 'type', 'class'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    constructor() {
        super();
        this.render();
    }

    get template() {
        const avisClass = this.className ? this.className + ' ' + this.currenttype : this.currenttype;
        return `
            <div role="alert" class="avis avis-${avisClass}">
                <div class="avis-img">
                    <span class="lnr ${this.iconForType(this.currenttype)}"></span>
                </div>
                <div class="avis-content">
                    <h3 class="h5 avis-titre">${this.titre}</h3>
                    <div>${this.contenu}</div>
                </div>
            </div>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }

    get currenttype() {
        const type = this.getAttribute('type');
        return ['general', 'important', 'succes', 'erreur', 'complementaire'].includes(type) ? type : 'general';
    }

    get titre() {
        return this.getAttribute('titre') || 'Titre';
    }

    get contenu() {
        return this.getAttribute('contenu') || 'Contenu';
    }

    iconForType(type) {
        switch (type) {
            case 'general':
                return 'lnr-question-circle';
            case 'important':
                return 'lnr-warning';
            case 'succes':
                return 'lnr-checkmark-circle';
            case 'erreur':
                return 'lnr-cross-circle';
            case 'complementaire':
                return 'lnr-mic';
            default:
                return 'lnr-question-circle';
        }
    }
}

customElements.get('qc-avis') || customElements.define('qc-avis', QcAvis);

export { QcAvis }
