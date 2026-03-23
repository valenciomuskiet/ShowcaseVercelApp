import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <main className="home-page">
      <div className="background">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid" />
      </div>

      <section className="hero">
        <div className="badge"> Valencio's Showcase • Hosting met Vercel</div>

        <h1>
          Deploy jouw project binnen 3 minuten met
          <br />
          <span>Vercel </span>
        </h1>

        <p className="subtitle hero-subtitle">
          Van lokale code naar een snelle, professionele live in lachwekkend hoog tempo. Een
          simpele deployment workflow die modern oogt en direct resultaat geeft.
        </p>

        <div className="actions">
          <Link className="primary link-button" to="/3-stappen">
            3 Step Walktrough
          </Link>

        </div>
      </section>
    </main>
  );
}

type StepSectionProps = {
  number: string;
  title: string;
  text: string;
  videoSrc: string;
  reverse?: boolean;
};

function StepSection({
  number,
  title,
  text,
  videoSrc,
  reverse = false,
}: StepSectionProps) {
  return (
    <section className={`step-section ${reverse ? "reverse" : ""}`}>
      <div className="step-media">
        <div className="video-frame">
          <video controls className="step-video-large" preload="metadata">
            <source src={videoSrc} type="video/mp4" />
            Je browser ondersteunt deze video niet.
          </video>
        </div>
      </div>

      <div className="step-content">
        <span className="step-label">Stap {number}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

function StepsPage() {
  return (
    <main className="steps-layout">
      <div className="background">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid" />
      </div>

      <section className="steps-hero">
        <div className="badge">3 stappen • Vercel deployment</div>

        <h1>
          Deployen in <span>3 stappen</span>
        </h1>

        <p className="subtitle">
          Scroll door de pagina en volg stap voor stap hoe je jouw website of app
          live zet met Vercel.
        </p>
      </section>

      <div className="steps-wrapper">
        <StepSection
          number="01"
          title="Push je code"
          text="Upload je project naar GitHub zodat Vercel je repository direct kan importeren. Dit vormt de basis van een snelle en professionele deployment workflow."
          videoSrc="/video/stap1.mp4"
        />

        <StepSection
          number="02"
          title="Importeer in Vercel"
          text="Koppel je GitHub-account aan Vercel en selecteer je repository. Vercel herkent automatisch je projectstructuur en zet de buildinstellingen voor je klaar."
          videoSrc="/video/stap2.mp4"
          reverse
        />

        <StepSection
          number="03"
          title="Ga live"
          text="Na het deployen ontvang je direct een publieke link. Je project staat meteen online en toekomstige updates kunnen automatisch opnieuw gedeployed worden."
          videoSrc="/video/stap3.mp4"
        />
      </div>

      <div className="bottom-actions">
        <Link className="secondary link-button" to="/">
          Terug naar home
        </Link>
      </div>
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