import { MainHeader } from "@/components/MainHeader";
import { NewsletterForm } from "@/components/NewsletterForm";
import { legacyDiscography, legacyShows, legacySocials, legacyWatchSets } from "@/lib/site-data";

export function LegacyHome() {
  return (
    <main className="legacy-home">
      <section className="legacy-hero">
        <MainHeader accent="orange" socials={legacySocials} />
        <img src="/assets/home/out-this-month.png" alt="Out this month" />
      </section>

      <section className="legacy-dark" id="watch-sets">
        <div className="section-inner">
          <h1 className="section-title">Watch Sets</h1>
          <div className="legacy-watch-grid">
            {legacyWatchSets.map((set) => (
              <a href={set.href} target="_blank" rel="noreferrer" key={set.title} className="watch-card legacy">
                <span className="media-wrap">
                  <img src={set.image} alt="" />
                  <span className="play-overlay visible" aria-hidden="true">
                    <span className="play-triangle" />
                    <span>Watch Now</span>
                  </span>
                </span>
                <span className="card-location">{set.location}</span>
                <strong>{set.title}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-dark alternate" id="shows">
        <div className="section-inner">
          <h2 className="section-title">Shows</h2>
          <div className="shows-list legacy-shows">
            {legacyShows.map(([date, city, venue]) => (
              <article className="show-row" key={`${date}-${venue}`}>
                <div>
                  <p>{date}</p>
                  <p>{city}</p>
                </div>
                <strong>{venue}</strong>
                <span>Tickets</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-dark" id="discography">
        <div className="section-inner">
          <h2 className="section-title">Discography</h2>
          <div className="legacy-disc-grid">
            {legacyDiscography.map((release) => (
              <article key={release.title}>
                <img src={release.image} alt="" />
                <p>{release.type}</p>
                <h3>{release.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-newsletter">
        <p>New music, tour dates, and exclusive content — straight to your inbox.</p>
        <NewsletterForm accent="orange" />
      </section>

      <footer className="wix-style-footer">
        <div className="business-name">
          <span />
          <strong>Business Name</strong>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/blank-1">About</a>
          <a href="mailto:ARYA@CIRQUE-NOIR.COM">Contact</a>
        </nav>
        <nav>
          <a href="https://www.facebook.com/WixStudio">Facebook</a>
          <a href="https://www.twitter.com/WixStudio">Twitter</a>
          <a href="https://www.wix.com/studio">LinkedIn</a>
        </nav>
        <address>
          Tel. 123-456-7890
          <br />
          500 Terry Francine St.
        </address>
        <p>
          Proudly designed by <a href="https://www.wix.com/studio">Your Name</a>
        </p>
        <small>
          © 2035 by Name of Site. Created on <a href="https://www.wix.com/studio">Wix Studio.</a>
        </small>
      </footer>
    </main>
  );
}
