import Header from '@/components/Header';
import { exams, references, SUBJECTS, examTitle } from '@/lib/exams';

export const metadata = { title: 'Bronnen · Tabieb2be' };

const subjectOf = title => {
  const t = title.toLowerCase();
  if (t.includes('fysica')) return 'fysica';
  if (t.includes('wiskunde')) return 'wiskunde';
  return 'chemie';
};

export default function Page() {
  return (
    <>
      <Header crumbs={[['/', 'Vakken'], [null, 'Bronnen']]} active="/bronnen" />
      <main className="listing">
        <div className="listing-head">
          <div>
            <div className="eyebrow">STUDEERMATERIAAL</div>
            <h1>Bronnen</h1>
            <p>
              Samenvattingen per onderwerp, examenanalyses en de originele examens met uitgewerkte oplossingen. Alle documenten
              komen van Brenda Casteleyn en openen op haar website.
            </p>
          </div>
        </div>

        <section className="source-section">
          <h2>Samenvattingen en analyses</h2>
          {SUBJECTS.filter(s => s.id !== 'biologie').map(s => (
            <div key={s.id} className="source-group" style={{ '--accent': s.color }}>
              <h3>{s.name}</h3>
              <ul>
                {references
                  .filter(r => subjectOf(r.title) === s.id)
                  .map(r => (
                    <li key={r.pdf}>
                      <a href={r.pdf} target="_blank" rel="noopener noreferrer">
                        {r.title} ↗
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="source-section">
          <h2>Examens en oplossingen</h2>
          <div className="source-table" role="table">
            {[...exams]
              .sort((a, b) => b.year - a.year || a.subject.localeCompare(b.subject))
              .map(e => (
                <div key={e.id} className="source-row" role="row">
                  <span role="cell">{examTitle(e)}</span>
                  <a role="cell" href={e.pdf} target="_blank" rel="noopener noreferrer">
                    Examen ↗
                  </a>
                  {e.solutionPdf ? (
                    <a role="cell" href={e.solutionPdf} target="_blank" rel="noopener noreferrer">
                      Oplossingen ↗
                    </a>
                  ) : (
                    <span role="cell" className="muted">
                      Antwoorden in examen-PDF
                    </span>
                  )}
                </div>
              ))}
          </div>
        </section>
        <p className="source-note">
          Bron: brendacasteleyn.be (Voorbereiding toelatingsexamen arts/tandarts). Examenvragen komen uit vorige officiële
          toelatingsexamens.
        </p>
      </main>
    </>
  );
}
