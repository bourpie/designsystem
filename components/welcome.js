import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'
import { WcCounter } from './counter.js'

class Welcome extends HTMLElement {

    constructor(){
        super()

        this.innerHTML = `
            <main>
                <section class="logo">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="${viteLogo}" class="logo" alt="Vite logo" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
                    </a>
                    <qc-bouton href="http://google.com" label="Bouton" style="avertissement" size="compact" display="block" ></qc-bouton>
                </section>
                <div class="card">
                    <h1>Hello Vite!</h1>
                    <wc-counter></wc-counter>
                </div>
            </main>

        <style>
            :root {
                --font-family: 'Inter', sans-serif;
                --font-size: 10px;
                --primary-color: #111827;
                --secondary-color: #646cff;
                --card-padding: 10px;
                --card-border-radius: 5px;
                --card-border-width: 1px;
                --card-border-color: #e5e7eb;
                --card-background-color: white;
                --card-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0
            }

            main {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            a {
                font-weight: 500;
                color: #646cff;
                text-decoration: inherit;
            }
            a:hover {
                color: var;
            }

            button {
                padding: var(--card-padding);
                border-radius: var(--card-border-radius);
                border: var(--card-border-width) solid var(--card-border-color);
                background-color: var(--card-background-color);
                cursor: pointer;
            }
            h1 {
                font-size: 3.2em;
                line-height: 1.1;
            }

            .logo {
                height: 6em;
                padding: 1.5em;
                will-change: filter;
                transition: filter 300ms;
            }
            .logo:hover {
                filter: drop-shadow(0 0 2em #646cffaa);
            }
            .logo.vanilla:hover {
                filter: drop-shadow(0 0 2em #f7df1eaa);
            }

        </style>
        
        `
    }
}

customElements.define('welcome-component', Welcome);

export {Welcome}