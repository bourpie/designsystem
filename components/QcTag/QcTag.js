import "./QcTag.css"

class QcTag extends HTMLElement {

    static get observedAttributes() {
        return ['tag'];
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

        return `
            <div class="qc-tag">
                ${this.tag}
            </div>
        `;
    }

    get tag() {
        return this.getAttribute('tag');
    }

    render() {
        this.innerHTML = this.template;
    }
}

customElements.get('qc-tag') || customElements.define('qc-tag', QcTag);

export { QcTag };