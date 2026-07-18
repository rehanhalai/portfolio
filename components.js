class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header" role="banner">
        <h1 class="wordmark">Rehan Halai <span class="wordmark__secondary">/ Automation</span></h1>
        <nav class="header__nav" aria-label="Main Navigation">
          <a href="/#main-work" class="link-hover">Work</a>
          <a href="/#about" class="link-hover">About</a>
          <a href="/#contact" class="link-hover">Contact</a>
        </nav>
        <div class="status" aria-label="Availability status">
          <span class="status-dot" aria-hidden="true"></span>
          <span>Available for Projects</span>
          <span class="status-time" id="local-time" aria-label="Local time in India"></span>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
