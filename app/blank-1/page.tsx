import type { Metadata } from "next";
import { TemplateFooter } from "@/components/TemplateFooter";
import { templateBody } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "SUNBELLA | Live Electronic Music & DJ Performances",
  description:
    "Experience the world of Sunbella | Immersive electronic music blending deep house, organic rhythms, soundscapes, live elements, and emotionally driven DJ sets designed to be not just heard, but felt."
};

export default function BlankOnePage() {
  return (
    <main className="template-page about-template">
      <a className="skip-link" href="#main-content">
        Skip to Main Content
      </a>
      <div className="template-topbar" />
      <section className="about-panel" id="main-content">
        <div className="about-image">
          <img src="/assets/template/healing-house-photo.png" alt="" />
        </div>
        <div className="about-copy">
          <img src="/assets/template/healing-house-logo.png" alt="The Healing House Project" />
          <div className="about-columns">
            <p>{templateBody}</p>
            <p>{templateBody}</p>
            <p>{templateBody}</p>
            <p>{templateBody}</p>
          </div>
        </div>
      </section>
      <TemplateFooter />
    </main>
  );
}
