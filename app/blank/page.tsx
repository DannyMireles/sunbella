import type { Metadata } from "next";
import { TemplateFooter } from "@/components/TemplateFooter";
import { galleryBody, galleryItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "VIDEOS | My Site 2"
};

export default function BlankPage() {
  return (
    <main className="template-page gallery-page">
      <a className="skip-link" href="#main-content">
        Skip to Main Content
      </a>
      <section className="gallery-grid" id="main-content" aria-label="Videos">
        {galleryItems.map(([title, image]) => (
          <article key={title} className="gallery-card">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{galleryBody}</p>
          </article>
        ))}
      </section>
      <TemplateFooter />
    </main>
  );
}
