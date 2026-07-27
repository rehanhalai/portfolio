class SiteHeader extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const isSubpage = path.includes('/projects') || path.includes('/case-studies');
    const rootPrefix = isSubpage ? '../' : './';

    this.innerHTML = `
      <header class="header" role="banner">
        <h1 class="wordmark"><a href="${rootPrefix}index.html" style="color: inherit; text-decoration: none;">Rehan Halai <span class="wordmark__secondary">/ Automation</span></a></h1>
        <nav class="header__nav" aria-label="Main Navigation">
          <a href="${rootPrefix}projects/" class="link-hover">Work</a>
          <a href="${rootPrefix}index.html#about" class="link-hover">About</a>
          <a href="#contact" class="link-hover">Contact</a>
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

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const isSubpage = path.includes('/projects') || path.includes('/case-studies');
    const iconPrefix = isSubpage ? '../assets/icons/' : 'assets/icons/';

    this.innerHTML = `
      <footer class="footer fade-entry" id="contact">
        <div class="footer__banner">
          <div class="footer__marquee-container" aria-hidden="true">
            <div class="footer__marquee-track">
              <!-- First Set -->
              <span class="marquee-text">Let's create something together</span>
              <a href="mailto:halairehan01@gmail.com" class="footer__cta" tabindex="-1">
                EMAIL ME <img src="${iconPrefix}click.svg" class="cta-icon" alt="" aria-hidden="true" />
              </a>
              <span class="marquee-text">Let's create something together</span>
              <a href="mailto:halairehan01@gmail.com" class="footer__cta" tabindex="-1">
                EMAIL ME <img src="${iconPrefix}click.svg" class="cta-icon" alt="" aria-hidden="true" />
              </a>
              <!-- Second Set (Duplicate for seamless loop) -->
              <span class="marquee-text">Let's create something together</span>
              <a href="mailto:halairehan01@gmail.com" class="footer__cta" tabindex="-1">
                EMAIL ME <img src="${iconPrefix}click.svg" class="cta-icon" alt="" aria-hidden="true" />
              </a>
              <span class="marquee-text">Let's create something together</span>
              <a href="mailto:halairehan01@gmail.com" class="footer__cta" tabindex="-1">
                EMAIL ME <img src="${iconPrefix}click.svg" class="cta-icon" alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
          <!-- Screen reader text and actual focusable link -->
          <a href="mailto:halairehan01@gmail.com" class="sr-only">Let's create something together. Email me.</a>
        </div>

        <div class="footer__bottom">
          <div class="footer__legal">
            <span class="footer__logo">REHAN HALAI &copy;</span>
          </div>
          <div class="footer__links">
            <a href="https://linkedin.com" target="_blank" class="link-hover">LINKEDIN</a> &bull;
            <a href="https://github.com/rehanhalai" target="_blank" class="link-hover">GITHUB</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
