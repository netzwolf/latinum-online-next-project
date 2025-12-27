import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="breadcrumb">Latinum.online / Satzlehre</div>

      <h1>Satzlehre (Syntax)</h1>
      <p>
        Die Satzlehre beschäftigt sich mit Kasusfunktionen, Satzgliedern und
        typischen lateinischen Satzkonstruktionen.
      </p>

      <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
        <section className="card">
          <h2>Nomen im Satz (Kasuslehre)</h2>
          <p>Funktionen der Fälle und ihre Rolle im Satz.</p>
          <ul className="topic-list">
            <li>
              <Link href="/satzlehre/nomen-im-satz">
                Überblick: Nomen im Satz
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/nomen-im-satz/satzglieder">
                Satzglieder
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/nomen-im-satz/kasusfunktionen">
                Kasusfunktionen
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/nomen-im-satz/praedikatsakkusativ">
                Prädikatsakkusativ / doppelter Akkusativ
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/nomen-im-satz/lokalkonstruktionen">
                Lokalkonstruktionen
              </Link>
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>Verbum im Satz</h2>
          <p>Tempus- und Modusgebrauch sowie satzwertige Konstruktionen.</p>
          <ul className="topic-list">
            <li>
              <Link href="/satzlehre/verbum-im-satz">
                Überblick: Verbum im Satz
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/verbum-im-satz/tempusgebrauch">
                Tempusgebrauch / consecutio temporum
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/verbum-im-satz/modusgebrauch">
                Modusgebrauch
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/verbum-im-satz/aci-nci-pc-abl-abs">
                AcI, NcI, PC, Ablativus absolutus
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/verbum-im-satz/gerundium-gerundiv-konstruktionen">
                Gerundium-/Gerundiv-Konstruktionen
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/verbum-im-satz/nebensaetze">
                Nebensätze (ut, cum, si, Relativsätze, indirekte Fragen)
              </Link>
            </li>
            <li>
              <Link href="/satzlehre/verbum-im-satz/indirekte-rede">
                Indirekte Rede
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
