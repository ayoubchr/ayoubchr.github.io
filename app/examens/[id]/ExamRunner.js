'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Quiz from '@/components/Quiz';
import { examTitle, subjectById } from '@/lib/exams';

export default function ExamRunner({ exam, questions, skipped }) {
  const [mode, setMode] = useState(null);
  const [run, setRun] = useState(0);
  const s = subjectById(exam.subject);
  const title = examTitle(exam);

  return (
    <>
      <Header crumbs={[['/', 'Vakken'], ['/examens', 'Examens'], [null, title]]} active="/examens" />
      <main className="listing quiz-page" style={{ '--accent': s.color }}>
        <div className="listing-head">
          <div>
            <div className="eyebrow">
              {s.name.toUpperCase()} · TOELATINGSEXAMEN {exam.year}
            </div>
            <h1>{title}</h1>
            <p>
              {questions.length} vragen.
              {skipped.length > 0 && ` Vraag ${skipped.join(', ')} kon niet als tekst worden omgezet; die vind je in de originele PDF.`}
            </p>
          </div>
        </div>

        {!mode ? (
          <div className="mode-picker">
            <button className="mode-card" onClick={() => setMode('examen')}>
              <span className="mode-icon">⏱</span>
              <strong>Examensimulatie</strong>
              <span>
                {Math.round((questions.length * 180) / 60)} minuten op de klok. Je ziet je score pas na het indienen, net als op
                de echte dag.
              </span>
            </button>
            <button className="mode-card" onClick={() => setMode('oefen')}>
              <span className="mode-icon">✦</span>
              <strong>Oefenmodus</strong>
              <span>Geen tijdsdruk. Na elke vraag zie je meteen of je antwoord juist was.</span>
            </button>
          </div>
        ) : (
          <Quiz
            key={`${mode}-${run}`}
            questions={questions}
            mode={mode}
            title={title}
            backHref="/examens"
            onRestart={() => setRun(r => r + 1)}
          />
        )}
      </main>
    </>
  );
}
