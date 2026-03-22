import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <main className="page">
      <div className="background">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid" />
      </div>

      <section className="hero">
        <div className="badge">Live showcase • Hosting met Vercel</div>

        <h1>
          Deploy je eigen <span>web app</span>
        </h1>

        <p className="subtitle">
          Van lokale code naar een live website op het wereldwijde web — simpel,
          snel en professioneel met Vercel.
        </p>

        <div className="actions">
          <Link className="primary link-button" to="/3-stappen">
            Je eigen web apps deployen met Vercel in 3 stappen
          </Link>

          <a
            className="secondary link-button"
            href="https://valenciosaez.com"
            target="_blank"
            rel="noreferrer"
          >
            Mijn laatste project
          </a>
        </div>
      </section>
    </main>
  );
}

function StepsPage() {
  return (
    <main className="page">
      <div className="background">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid" />
      </div>

      <section className="hero steps-page">
        <div className="badge">3 stappen • Vercel deployment</div>

        <h1>
          Deployen in <span>3 stappen</span>
        </h1>

        <p className="subtitle">
          Dit is de simpele workflow om je eigen web app live te zetten met
          Vercel.
        </p>

        <div className="steps">
          <div className="step-card">
            <span className="step-number">01</span>
            <h2>Push je code</h2>
            <p>
              Zet je project op GitHub zodat Vercel je repository kan importeren.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h2>Importeer in Vercel</h2>
            <p>
              Koppel je repository en laat Vercel automatisch builden en
              deployen.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h2>Ga live</h2>
            <p>
              Na je deploy staat je web app direct online met een publieke link.
            </p>
          </div>
        </div>

        <div className="actions">
          <Link className="secondary link-button" to="/">
            Terug naar home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/3-stappen" element={<StepsPage />} />
    </Routes>
  );
}