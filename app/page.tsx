"use client";

import { useEffect, useRef } from "react";

function RevealSection({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`page-section reveal ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <p className="eyebrow">Richard Bélénus</p>
        <div className="hero-symbols">🔨 &nbsp; 🪞</div>
        <h1>
          Le Marteau
          <br />
          et le Miroir
        </h1>
        <div className="titre-separator" />
        <p className="subtitle">33 frappes pour se transformer</p>
        <blockquote className="hero-quote">
          Tu ne seras pas devenu quelqu&apos;un d&apos;autre.
          <br />
          Tu auras simplement cessé de te fuir.
        </blockquote>
        <div className="scroll-hint">
          <span>Descends</span>
          <div className="scroll-dot" />
        </div>
      </div>

      {/* DESCRIPTION */}
      <RevealSection className="description-section">
        <span className="section-label">Le livre</span>
        <div className="or-line" />
        <p>
          Un marteau pour briser ce qui enferme.
          <br />
          Un miroir pour regarder, sans jugement, sans fuir.
        </p>
        <p
          style={{
            marginTop: 20,
            fontSize: "1rem",
            color: "var(--texte-doux)",
          }}
        >
          Inspiré de trente-trois degrés de progression symbolique,
          <br />
          ce livre t&apos;accompagne à travers quatre actes intérieurs.
        </p>

        <div className="actes-grid">
          <div className="acte-item">
            <span className="acte-emoji">🪞</span>
            <span className="acte-titre">Acte I — Le Miroir</span>
            <span className="acte-desc">Voir. Reconnaître. Fissurer.</span>
          </div>
          <div className="acte-item">
            <span className="acte-emoji">🔨</span>
            <span className="acte-titre">Acte II — Le Marteau</span>
            <span className="acte-desc">Sculpter. Frapper. Rompre.</span>
          </div>
          <div className="acte-item">
            <span className="acte-emoji">🌀</span>
            <span className="acte-titre">Acte III — La Traversée</span>
            <span className="acte-desc">Intégrer. Écouter. Ajuster.</span>
          </div>
          <div className="acte-item">
            <span className="acte-emoji">🔥</span>
            <span className="acte-titre">Acte IV — L&apos;Œuvre</span>
            <span className="acte-desc">Construire. Engager. Incarner.</span>
          </div>
        </div>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--texte-doux)",
            fontStyle: "italic",
          }}
        >
          Chaque frappe libère la forme prisonnière de ta pierre.
          <br />
          <span style={{ color: "var(--or)", fontStyle: "normal" }}>
            33 frappes. Une pierre. Toi.
          </span>
        </p>
      </RevealSection>

      {/* EXTRAIT GRATUIT */}
      <RevealSection className="extrait-section">
        <div className="extrait-card">
          <h2>✦ EXTRAIT GRATUIT ✦</h2>
          <p>Les 4 premières frappes de l&apos;Acte I — format EPUB</p>

          <div className="extrait-chapitres">
            <span className="chapitre-tag">1. L&apos;Appel</span>
            <span className="chapitre-tag">2. L&apos;Héritage</span>
            <span className="chapitre-tag">3. Le Masque</span>
            <span className="chapitre-tag">4. La Blessure</span>
          </div>

          <div className="btn-group">
            <a
              href="https://t.me/le_marteau_et_le_miroir"
              className="btn btn-telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
              </svg>
              Canal Telegram
            </a>

            <span className="btn-divider">— ou —</span>

            <a
              href="mailto:richardblns@proton.me?subject=Demande%20extrait%20EPUB%20-%20Le%20Marteau%20et%20le%20Miroir"
              className="btn btn-outline"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Recevoir par email
            </a>
          </div>

          <p className="badge-gratuit">
            ✧ Gratuit · Sans inscription · Format EPUB
          </p>
        </div>
      </RevealSection>

      {/* LIVRE COMPLET */}
      <RevealSection className="achat-section">
        <span className="section-label">Le livre complet</span>
        <div className="or-line" />
        <h2>Les 33 frappes</h2>
        <p>
          Une transformation profonde, de la première fissure à la renaissance.
        </p>
        <div className="btn-group">
          <a
            href="mailto:richardblns@proton.me?subject=Commande%20-%20Le%20Marteau%20et%20le%20Miroir"
            className="btn btn-primary"
          >
            Obtenir le livre complet
          </a>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--texte-doux)",
              fontStyle: "italic",
              marginTop: 4,
            }}
          >
            Édition originale · Tirage limité
          </p>
        </div>
      </RevealSection>

      {/* CITATION FINALE */}
      <RevealSection className="citation-section">
        <p className="citation-finale">
          Si ce texte t&apos;a touché,
          <br />
          ce n&apos;est pas un hasard.
          <br />
          <span style={{ color: "var(--or)" }}>
            Certaines pierres savent quand elles doivent être frappées.
          </span>
        </p>
        <p className="devise">Entre · Frappe · Traverse · Deviens</p>
      </RevealSection>

      {/* CONTACT */}
      <RevealSection className="contact-section">
        <span className="section-label">Contact</span>
        <div className="or-line" />
        <p>Une question ? Une envie d&apos;échanger ?</p>
        <div className="contact-links">
          <a href="mailto:richardblns@proton.me" className="contact-link">
            richardblns@proton.me
          </a>
          <a
            href="https://t.me/le_marteau_et_le_miroir"
            className="contact-link telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            @le_marteau_et_le_miroir
          </a>
        </div>
      </RevealSection>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>© Richard Bélénus, 2026 — Tous droits réservés</p>
        <p>« Entre. Frappe. Traverse. Deviens. »</p>
      </footer>
    </>
  );
}
