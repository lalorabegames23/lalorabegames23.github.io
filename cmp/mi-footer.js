class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* Html */ 
        `Copyright &copy; Eduardo Ramirez Bello`;
  }
}
customElements.define("mi-footer", MiFooter);
