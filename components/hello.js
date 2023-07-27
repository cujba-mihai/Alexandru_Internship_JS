import {LitElement, html, css} from 'lit';

// Documentation: https://lit.dev/docs/
export default class HelloComponent extends LitElement {
    static styles = css`
      h2 {
      color: greenyellow;
      }
      h3 {
        color: yellowgreen;
      }
  `;

    static properties = {
        developer: {type: String}
    }

    // Render the component's DOM by returning a Lit template
    render() {
        return html`
            <div>
                <h2>Hello, ${this.developer}!</h2>
                <h3>This is an example of a WebComponent</h3>
            </div>
        `;
    }
}

customElements.define('hello-component', HelloComponent);
