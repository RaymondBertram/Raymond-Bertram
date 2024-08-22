import Link from "next/link";

export default function Impress() {
  return (
    <div className="flex flex-col">
      <button className="flex flex-row shadow-md p-2"><Link href={"/"}>Zurück</Link></button>
      <h1>Impressum</h1>

      <p>
        Raymond Bertram
        <br />
        Full Stack Software Engineer in a consulting role
        <br />
        <br />
        &acute;
        <br />
        21244 Buchholz
      </p>

      <h2>Kontakt</h2>
      <p>
        <br />
        E-Mail: contact@bertram-tech.de
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
        Umsatzsteuergesetz:
        <br />
        DE367319126
      </p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        Berufsbezeichnung:
        <br />
        Full Stack Software Engineer in einer beratentenden Funktion
      </p>
      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
      </p>
    </div>
  );
}
