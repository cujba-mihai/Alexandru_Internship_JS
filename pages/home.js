import styles from '/style.css'
import viteLogo from '/vite.svg'
import { LitElement, html, css } from 'lit';
import '/components/counter-button.js'

import javascriptLogo from "../javascript.svg";

export  class HomePage extends  LitElement {
    static styles =css([styles]);

    render() {
        return html`
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="${viteLogo}" class="logo" alt="Vite logo" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
                    </a>
                    <hello-component developer="Alex"></hello-component>
                    <div class="card">
                        <counter-button></counter-button>
                    </div>
                    <p class="read-the-docs">
                        Click on the Vite logo to learn more
                    </p>
        `
    }
}

customElements.define('home-page', HomePage);
