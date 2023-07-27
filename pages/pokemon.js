import styles from '/style.css'
import { LitElement, html, css } from 'lit';

export  class Pokemon extends LitElement {
    static styles =css([styles]);

    static properties = {
       id: {
           type: Number
       }
    }

    render() {
        return html`
           <h1>This Pokémon has id ${this.id}</h1>
        `
    }
}

customElements.define('pokemon-page', Pokemon);
