import { NewsletterForm } from "@/components/NewsletterForm";
import { MainHeader } from "@/components/MainHeader";
import { discography, rootNav, rootShows, watchSets } from "@/lib/site-data";

export function RootHome() {
  return (
    <main className="root-page">
      <section className="root-hero" aria-label="SUNBRELLA">
        <MainHeader />
        <div className="hero-content">
          <picture>
            <source media="(max-width: 520px)" srcSet="/assets/root/logo-word-white-mobile.png" />
            <img className="hero-wordmark" src="/assets/root/logo-word-white.png" alt="SUNBELLA" />
          </picture>
          <p>LIVE ELECTRONIC BAND</p>
        </div>
      </section>

      <section className="root-section watch-section" id="watch-sets">
        <div className="section-inner">
          <h2 className="section-title">Watch Sets</h2>
          <div className="section-line" />
          <div className="watch-grid">
            {watchSets.map((set) => (
              <a key={set.title} className="watch-card" href={set.href} target="_blank" rel="noreferrer">
                <span className="media-wrap">
                  <img src={set.image} alt={set.alt} />
                  <span className="play-overlay" aria-hidden="true">
                    <span className="play-triangle" />
                    <span>WATCH</span>
                  </span>
                </span>
                <span className="card-location">{set.location}</span>
                <strong>{set.title}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="root-section shows-section" id="shows">
        <div className="section-inner">
          <h2 className="section-title">Shows</h2>
          <div className="section-line" />
          <div className="shows-list">
            {rootShows.map((show) => (
              <article className="show-row" key={`${show.date}-${show.venue}`}>
                <div>
                  <p>{show.date}</p>
                  <p>{show.city}</p>
                </div>
                <strong>{show.venue}</strong>
                {show.href ? (
                  <a href={show.href} target="_blank" rel="noreferrer">
                    Tickets
                  </a>
                ) : (
                  <span>Tickets</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="root-section discography-section" id="discography">
        <div className="section-inner narrow">
          <h2 className="visually-hidden">Discography</h2>
          <div className="section-line solo" />
          <div className="discography-grid">
            {discography.map((release) => (
              <article key={release.title} className="release-card">
                <img src={release.image} alt={release.alt} />
                <p>{release.type}</p>
                <h3>{release.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section" id="newsletter">
        <div className="section-line centered" />
        <h2 className="visually-hidden">Be the first to know</h2>
        <p>New music, tour dates, and exclusive content — straight to your inbox.</p>
        <NewsletterForm />
      </section>

      <footer className="root-footer">
        <div className="root-footer-main">
          <a href="/" aria-label="SUNBRELLA home">
            <img src="/assets/root/sunbrella-typeface.png" alt="" />
          </a>
          <nav aria-label="Footer navigation">
            {rootNav.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-line" />
        <p>© 2026 Sunbrella. All rights reserved.</p>
      </footer>
    </main>
  );
}
