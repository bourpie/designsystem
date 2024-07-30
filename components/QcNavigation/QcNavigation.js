import './QcNavigation.css'

class QcNavigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.addEventListeners();
        this.enhanceAccessibility();
    }

    addEventListeners() {
        // Utilisez this pour cibler les éléments en dehors du shadow DOM
        const toggleButtons = this.querySelectorAll('button');
        toggleButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                this.toggleSubmenu(button);
            });
        });

        // Ajouter un écouteur d'événement global pour fermer les sous-menus lorsqu'on clique à l'extérieur
        document.addEventListener('click', (event) => {
            const isClickInside = this.contains(event.target) || event.target.closest('qc-navigation');
            if (!isClickInside) {
                this.closeAllSubmenus();
            }
        });
    }

    toggleSubmenu(button) {
        const submenu = button.nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === 'ul') {
            const isExpanded = submenu.classList.toggle('show');
            button.setAttribute('aria-expanded', isExpanded);
            this.updateButtonIcon(button, isExpanded);
        }
    }

    updateButtonIcon(button, isExpanded) {
        const icon = button.querySelector('span');
        if (isExpanded) {
            icon.classList.remove('lnr-chevron-down');
            icon.classList.add('lnr-chevron-up');
            button.setAttribute('aria-label', 'Réduire le sous-menu');
            button.classList.add('open');
        } else {
            icon.classList.remove('lnr-chevron-up');
            icon.classList.add('lnr-chevron-down');
            button.setAttribute('aria-label', 'Développer le sous-menu');
            button.classList.remove('open');
        }
    }

    closeAllSubmenus() {
        const submenus = this.querySelectorAll('ul');
        const toggleButtons = this.querySelectorAll('button');
        submenus.forEach(submenu => submenu.classList.remove('show'));
        toggleButtons.forEach(button => {
            button.setAttribute('aria-expanded', 'false');
            this.updateButtonIcon(button, false);
        });
    }

    enhanceAccessibility() {
        const nav = this.shadowRoot.querySelector('nav');
        const ulElements = this.querySelectorAll('ul');

        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Navigation principale');

        ulElements.forEach((ul, ulIndex) => {
            ul.setAttribute('role', 'menubar');
            const liElements = ul.children;

            Array.from(liElements).forEach((li, liIndex) => {
                li.setAttribute('role', 'none');
                const anchor = li.querySelector('a');
                const button = li.querySelector('button');
                const submenu = li.querySelector('ul');

                if (anchor) {
                    anchor.setAttribute('role', 'menuitem');
                }

                if (button) {
                    button.classList.add('submenu-toggle');
                    button.setAttribute('aria-haspopup', 'true');
                    button.setAttribute('aria-expanded', 'false');
                    button.setAttribute('aria-label', 'Développer le sous-menu');
                    button.nextElementSibling.setAttribute('role', 'menu');
                }

                if (submenu) {
                    submenu.classList.add('submenu');
                    submenu.setAttribute('aria-label', `Sous-menu ${anchor ? anchor.textContent.trim() : 'sans titre'}`);
                }
            });
        });
    }

    render() {
        const styles = `
            :host {
                display: block;
            }
            .container {
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto;
            }
    
            @media (min-width: 1200px) {
                .container {
                    max-width: 1110px;
                }
            }
        `;

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <nav>
                <div class="container">
                    <div class="row">
                        <slot></slot>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.get('qc-navigation') || customElements.define('qc-navigation', QcNavigation);

export { QcNavigation };

