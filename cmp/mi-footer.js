class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Ramirez Bello Eduardo`;
  }
}
customElements.define("mi-footer", MiFooter);
