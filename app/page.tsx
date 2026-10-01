"use client";

import { useEffect, useState } from "react";

const instagram = "https://www.instagram.com/eeznails/";
const linktree = "https://linktr.ee/eeznails";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={menuOpen ? "header menu-open" : "header"}>
        <a href="#home" className="logo" onClick={closeMenu}>
          eeZ<span>nails</span>
        </a>

        <nav className="desktop-nav">
          <a href="#gelx">Gel-X</a>
          <a href="#space">The Space</a>
          <a href="#booking">Booking</a>
          <a href="#social">Socials</a>
        </nav>

        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="header-cta"
        >
          DM TO BOOK <span>↗</span>
        </a>

        <button
          type="button"
          className={menuOpen ? "menu-button active" : "menu-button"}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
          <div className="mobile-meta">
            <span>ORLANDO, FL</span>
            <span>GEL-X SPECIALIST</span>
          </div>

          <nav>
            <a href="#gelx" onClick={closeMenu}>
              <small>01</small>
              Gel-X
            </a>

            <a href="#space" onClick={closeMenu}>
              <small>02</small>
              The Space
            </a>

            <a href="#booking" onClick={closeMenu}>
              <small>03</small>
              Booking
            </a>

            <a href="#social" onClick={closeMenu}>
              <small>04</small>
              Socials
            </a>
          </nav>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="mobile-cta"
          >
            DM @EEZNAILS <span>↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-topline">
          <span>ORLANDO, FL</span>
          <span>HOME-BASED</span>
          <span>GEL-X SPECIALIST</span>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow">WELCOME TO EEZNAILS</p>

            <h1>
              YOUR
              <br />
              NEXT SET
              <br />
              <span>STARTS HERE.</span>
            </h1>

            <div className="hero-actions">
              <p>
                Gel-X nails in Orlando with a home-based, welcoming setup and
                direct booking through Instagram.
              </p>

              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="black-button"
              >
                <span>DM TO BOOK</span>
                <i>↗</i>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="chrome-orbit orbit-one" />
            <div className="chrome-orbit orbit-two" />

            <div className="hand">
              <div className="palm" />

              <div className="finger finger-one">
                <i />
              </div>

              <div className="finger finger-two">
                <i />
              </div>

              <div className="finger finger-three">
                <i />
              </div>

              <div className="finger finger-four">
                <i />
              </div>
            </div>

            <div className="hero-sticker sticker-one">
              GEL-X
              <span>★</span>
            </div>

            <div className="hero-sticker sticker-two">
              ORL
              <span>♥</span>
            </div>

            <p className="hero-watermark">EEZ</p>
          </div>
        </div>

        <div className="hero-footer">
          <span>NAILS / ORLANDO / FL</span>
          <span>SCROLL ↓</span>
        </div>
      </section>

      <section className="marquee">
        <div>
          <span>GEL-X</span>
          <i>✦</i>
          <span>ORLANDO</span>
          <i>✦</i>
          <span>EEZNAILS</span>
          <i>✦</i>
          <span>SAFE SPACE</span>
          <i>✦</i>
          <span>DM TO BOOK</span>
          <i>✦</i>
          <span>GEL-X</span>
          <i>✦</i>
          <span>ORLANDO</span>
        </div>
      </section>

      <section className="gelx" id="gelx">
        <div className="section-number">
          <span>01</span>
          <p>THE SPECIALTY</p>
        </div>

        <div className="gelx-heading">
          <p className="eyebrow">GEL-X / EEZNAILS</p>

          <h2>
            LET&apos;S GET
            <br />
            <span>NAILED.</span>
          </h2>
        </div>

        <div className="gelx-grid">
          <div className="gelx-art" aria-hidden="true">
            <div className="nail nail-one">
              <span>★</span>
            </div>

            <div className="nail nail-two">
              <span>e</span>
            </div>

            <div className="nail nail-three">
              <span>♥</span>
            </div>

            <div className="nail nail-four">
              <span>z</span>
            </div>

            <div className="gelx-circle">
              <span>GEL-X</span>
            </div>
          </div>

          <div className="gelx-copy">
            <span>EEZ / 01</span>

            <h3>
              GEL-X IS
              <br />
              THE <em>THING.</em>
            </h3>

            <p>
              eeZNails publicly specializes in Gel-X, giving the brand a clear
              focus for clients looking for their next set in Orlando.
            </p>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              SEE @EEZNAILS <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-top">
          <span>02 / THE VIBE</span>
          <span>EEZNAILS · ORLANDO</span>
        </div>

        <p className="eyebrow">YOUR NAIL APPOINTMENT, YOUR SPACE</p>

        <h2>
          COME AS
          <br />
          YOU <span>ARE.</span>
        </h2>

        <div className="manifesto-bottom">
          <p>
            eeZNails describes the experience as a safe space — a simple idea
            that matters: you should feel welcome while getting your nails
            done.
          </p>

          <div className="safe-badge">
            <div>
              <span>SAFE</span>
              <strong>♥</strong>
              <span>SPACE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space" id="space">
        <div className="space-copy">
          <span className="space-number">03 / THE SPACE</span>

          <p className="eyebrow">HOME-BASED · ORLANDO</p>

          <h2>
            SMALL
            <br />
            SPACE.
            <br />
            <span>BIG ENERGY.</span>
          </h2>

          <p className="space-description">
            eeZNails is currently presented as a home-based nail business in
            Orlando, with appointments connected directly through social media.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            CONNECT ON INSTAGRAM <span>↗</span>
          </a>
        </div>

        <div className="space-art" aria-hidden="true">
          <div className="checkerboard">
            {Array.from({ length: 36 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className="blob">
            <span>EEZ</span>
          </div>

          <div className="space-card">
            <small>BASED IN</small>
            <strong>ORLANDO</strong>
            <p>FLORIDA</p>
          </div>

          <div className="sparkle sparkle-one">✦</div>
          <div className="sparkle sparkle-two">✦</div>
        </div>
      </section>

      <section className="identity">
        <div className="identity-label">
          <span>04</span>
          <p>EEZ ENERGY</p>
        </div>

        <div className="identity-main">
          <p className="eyebrow">THE BRAND</p>

          <h2>
            EASY TO
            <br />
            REMEMBER.
            <br />
            HARD TO
            <br />
            <span>IGNORE.</span>
          </h2>
        </div>

        <div className="identity-side">
          <div className="mini-logo">
            eeZ
            <small>NAILS</small>
          </div>

          <p>
            Gel-X. Orlando. A safe space. A direct DM away from your next
            appointment.
          </p>
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-heading">
          <span>05 / HOW TO BOOK</span>

          <div>
            <p className="eyebrow">KEEP IT EEZ</p>

            <h2>
              THREE
              <br />
              <span>EEZ</span> STEPS.
            </h2>
          </div>
        </div>

        <div className="booking-steps">
          <article>
            <div className="step-top">
              <span>01</span>
              <i>◎</i>
            </div>

            <h3>CHECK THE PAGE</h3>

            <p>
              Head to @eeznails to see the latest work and current updates.
            </p>
          </article>

          <article>
            <div className="step-top">
              <span>02</span>
              <i>↗</i>
            </div>

            <h3>SEND A DM</h3>

            <p>
              Message eeZNails directly to start the booking conversation.
            </p>
          </article>

          <article>
            <div className="step-top">
              <span>03</span>
              <i>♥</i>
            </div>

            <h3>GET CONNECTED</h3>

            <p>
              Connect directly about current appointment availability.
            </p>
          </article>
        </div>

        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="booking-banner"
        >
          <span>READY?</span>
          <strong>DM @EEZNAILS TO BOOK</strong>
          <i>↗</i>
        </a>
      </section>

      <section className="orlando">
        <div className="orlando-art" aria-hidden="true">
          <div className="sun" />

          <div className="palm-tree tree-one">
            <span />
            <i />
            <i />
            <i />
            <i />
          </div>

          <div className="palm-tree tree-two">
            <span />
            <i />
            <i />
            <i />
            <i />
          </div>

          <div className="horizon horizon-one" />
          <div className="horizon horizon-two" />

          <strong>ORL</strong>
        </div>

        <div className="orlando-copy">
          <span>06 / LOCATION</span>

          <p className="eyebrow">FLORIDA</p>

          <h2>
            HELLO,
            <br />
            <span>ORLANDO.</span>
          </h2>

          <p>
            eeZNails is based in Orlando, Florida. Connect directly through
            Instagram for current booking information.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            ASK ABOUT AVAILABILITY <span>↗</span>
          </a>
        </div>
      </section>

      <section className="social" id="social">
        <div className="social-top">
          <span>07 / SOCIALS</span>
          <span>STAY CONNECTED</span>
        </div>

        <div className="social-heading">
          <p className="eyebrow">FIND EEZNAILS ONLINE</p>

          <h2>
            FOLLOW THE
            <br />
            <span>SETS.</span>
          </h2>
        </div>

        <div className="social-links">
          <a href={instagram} target="_blank" rel="noreferrer">
            <span>01</span>

            <div>
              <small>INSTAGRAM</small>
              <strong>@eeznails</strong>
            </div>

            <i>↗</i>
          </a>

          <a href={linktree} target="_blank" rel="noreferrer">
            <span>02</span>

            <div>
              <small>LINKS</small>
              <strong>eeznails</strong>
            </div>

            <i>↗</i>
          </a>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-meta">
          <span>08 / APPOINTMENTS</span>
          <span>ORLANDO, FL</span>
        </div>

        <div className="final-content">
          <p className="eyebrow">YOUR NEXT SET IS A DM AWAY</p>

          <h2>
            MAKE IT
            <br />
            <span>EEZ.</span>
          </h2>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="final-button"
          >
            <span>DM @EEZNAILS</span>
            <i>↗</i>
          </a>
        </div>

        <div className="final-nails" aria-hidden="true">
          <div className="final-nail nail-a">e</div>
          <div className="final-nail nail-b">e</div>
          <div className="final-nail nail-c">z</div>
        </div>
      </section>

      <footer>
        <a href="#home" className="footer-logo">
          eeZ<span>nails</span>
        </a>

        <p>GEL-X · ORLANDO · SAFE SPACE</p>

        <a href={instagram} target="_blank" rel="noreferrer">
          INSTAGRAM ↗
        </a>
      </footer>
    </main>
  );
}