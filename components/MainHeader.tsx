"use client";

import { useState } from "react";
import { rootNav, rootSocials } from "@/lib/site-data";

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

type MainHeaderProps = {
  accent?: "purple" | "orange";
  homeHref?: string;
  socials?: SocialLink[];
};

export function MainHeader({ accent = "purple", homeHref = "/", socials = rootSocials }: MainHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`main-header accent-${accent}`}>
      <div className="social-row" aria-label="Social links">
        {socials.map((item) => (
          <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
            <img src={item.icon} alt="" width={20} height={20} />
          </a>
        ))}
      </div>

      <a className="header-mark" href={homeHref} aria-label="SUNBRELLA home">
        <img src="/assets/shared/sunbrella-icon.png" alt="" width={58} height={58} />
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {rootNav.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {rootNav.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
