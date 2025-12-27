export default function Page() {
  return (
    <main>
      <h1>Latinum.online</h1>
      <p>
        Diese Dummy-Seite bildet die Struktur eines Latein-Portals ab. Die Inhalte
        sind Platzhalter und können von dir nach und nach mit Material gefüllt werden.
      </p>

      <div className="grid grid-2" style={{ marginTop: "2rem" }}>
        <section className="card">
          <h2>Formenlehre (Morphologie)</h2>
          <p>Wiederholung von Deklinationen, Konjugationen und Verbformen.</p>
          <ul className="topic-list">
            <li>Deklinationen (a-, o-, konsonantische, i-, e-, u-)</li>
            <li>Adjektive, Adverbien, Pronomina, Zahlwörter</li>
            <li>Konjugationen, Tempora, Modi, Partizipien, Gerundium</li>
          </ul>
        </section>

        <section className="card">
          <h2>Satzlehre (Syntax)</h2>
          <p>Kasusfunktionen, Satzglieder und typische Konstruktionen.</p>
          <ul className="topic-list">
            <li>Kasuslehre und Satzglieder</li>
            <li>AcI, NcI, PC, Ablativus absolutus</li>
            <li>Nebensätze, indirekte Rede, Modus- und Tempusgebrauch</li>
          </ul>
        </section>
      </div>
    </main>
  );
}