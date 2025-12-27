import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="breadcrumb">Latinum.online / Formenlehre</div>

      <h1>Formenlehre (Morphologie)</h1>
      <p>
        Hier findest du eine Übersicht über Deklinationen, Konjugationen und
        weitere Wortarten im Lateinischen.
      </p>

      <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
        <section className="card">
          <h2>Deklinationen</h2>
          <p>Nominalformen: Substantive, Adjektive, Pronomina, Zahlwörter.</p>
          <ul className="topic-list">
            <li>
              <Link href="/formenlehre/deklinationen">Überblick Deklinationen</Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/a-deklination">
                a-Deklination
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/o-deklination">
                o-Deklination
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/konsonantische-deklination">
                konsonantische Deklination
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/i-deklination">
                i-Deklination
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/e-deklination">
                e-Deklination
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/u-deklination">
                u-Deklination
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/nomen">Nomen</Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/adjektive-adverbien">
                Adjektive / Adverbien
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/pronomina">
                Pronomina
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/deklinationen/zahlwoerter">
                Zahlwörter (Numeralia)
              </Link>
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>Konjugationen</h2>
          <p>Verbformen: Tempora, Modi, Genera verbi und Sonderformen.</p>
          <ul className="topic-list">
            <li>
              <Link href="/formenlehre/konjugationen">
                Überblick Konjugationen
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/verbklassen">
                Verbklassen / Konjugationsarten
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/tempora">
                Zeitformen (Tempora)
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/staemme">
                Verbstämme
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/genera-verbi">
                Genera verbi (Aktiv/Passiv)
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/modi">
                Modi (Indikativ/Konjunktiv/Imperativ)
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/infinitive">
                Infinitive
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/partizipien">
                Partizipien
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/gerundium-gerundivum">
                Gerundium / Gerundivum
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/deponentia">
                Deponentia / Semideponentia
              </Link>
            </li>
            <li>
              <Link href="/formenlehre/konjugationen/unregelmaessige-verben">
                Unregelmäßige Verben
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
