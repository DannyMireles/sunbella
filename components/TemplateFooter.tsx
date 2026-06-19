import { templateSocialLinks } from "@/lib/site-data";

export function TemplateFooter() {
  return (
    <footer className="template-footer">
      <div className="template-footer-grid">
        <div>
          <p>832-285-6164</p>
          <p>
            BOOKINGS: <a href="mailto:ARYA@CIRQUE-NOIR.COM">ARYA@CIRQUE-NOIR.COM</a>
          </p>
        </div>
        <nav aria-label="Social links">
          {templateSocialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
        <nav aria-label="Footer pages">
          <a href="/privacy-policy">PRIVACY POLICY</a>
          <a href="/accessibility-statement">ACCESSIBILITY STATEMENT</a>
          <small>© 2026 by SUNBRELLA</small>
        </nav>
      </div>
      <img className="rainbow-arc" src="/assets/template/rainbow-arc.png" alt="" aria-hidden="true" />
    </footer>
  );
}
