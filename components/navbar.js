import navBarStyles from './navbar.css';
import {css, html, LitElement} from "lit";
import {map } from 'lit/directives/map.js';
export class Navbar extends LitElement {
    static styles = css([navBarStyles]);

    routes = [
        {
            name: 'Home',
            route: '/',
        },
        {
            name: 'Pokemon',
            route: '/pokemon/2',
        },
        {
            name: 'Not found',
            route: '/not-found',
        },
    ]

    render() {
        return html`
        <ul>
            ${map(this.routes, ({route, name}) => html`
            <li>
                <a href="${route}">${name}</a>
            </li>`
        )}
        </ul>
        `
    }
}

customElements.define('nav-bar', Navbar);
