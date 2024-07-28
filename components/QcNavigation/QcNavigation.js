import './QcNavigation.css';

class QcNavigation extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        const toggleButtons = this.querySelectorAll('.submenu-toggle');
        toggleButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                this.toggleSubmenu(button);
            });
        });

        // Add click event listener to close the submenu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInside = this.contains(event.target) || event.target.closest('qc-navigation');
            if (!isClickInside) {
                this.closeAllSubmenus();
            }
        });
    }

    toggleSubmenu(button) {
        const submenu = button.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
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
        const submenus = this.querySelectorAll('.submenu');
        const toggleButtons = this.querySelectorAll('.submenu-toggle');
        submenus.forEach(submenu => submenu.classList.remove('show'));
        toggleButtons.forEach(button => {
            button.setAttribute('aria-expanded', 'false');
            this.updateButtonIcon(button, false);
        });
    }

    get template() {
        return `
            <nav class="qc-navigation" aria-label="Navigation principale">
                <div class="container">
                    <div class="row">
                        <ul class="unstyled" role="menubar">
                            <li role="none">
                                <a href="#" role="menuitem">À propos</a>
                            </li>
                            <li role="none">
                                <a href="#" role="menuitem">Contenu</a>
                                <button class="submenu-toggle" aria-haspopup="true" aria-expanded="false" aria-label="Développer le sous-menu">
                                    <span class="lnr lnr-chevron-down"></span>
                                </button>
                                <ul class="submenu" aria-label="Sous-menu Contenu">
                                    <li role="none"><a href="#" role="menuitem">Articles</a></li>
                                    <li role="none"><a href="#" role="menuitem">Vidéos</a></li>
                                </ul>
                            </li>
                            <li role="none">
                                <a href="#" role="menuitem" aria-current="page">Design</a>
                            </li>
                            <li role="none">
                                <a href="#" role="menuitem">Ressources</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }

    render() {
        this.innerHTML = this.template;
    }
}

customElements.get('qc-navigation') || customElements.define('qc-navigation', QcNavigation);

export { QcNavigation };
