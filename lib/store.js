'use client';
import { useCallback, useEffect, useState } from 'react';

// Voortgang blijft op dit toestel; zonder localStorage werkt alles tijdens het bezoek.
export function useStored(key, initial) {
  const [value, setValue] = useState(initial);
  const [ok, setOk] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw));
      setOk(true);
    } catch {
      setOk(false);
    }
  }, [key]);
  const update = useCallback(
    fn => {
      setValue(prev => {
        const next = typeof fn === 'function' ? fn(prev) : fn;
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [key]
  );
  return [value, update, ok];
}

// Leerpad-haltes: zelfde sleutel als de offline versie, zodat voortgang compatibel blijft.
export const useSeen = () => useStored('tabieb2be-kiw-punten-2026', {});

// Antwoorden op examenvragen: { [vraagId]: { last: 'A', correct: bool, tries: n, right: n } }
export const useAnswers = () => useStored('tabieb2be-examenvragen', {});

export function recordAnswer(setAnswers, question, choice) {
  const correct = choice === question.answer;
  setAnswers(prev => {
    const old = prev[question.id] || { tries: 0, right: 0 };
    return {
      ...prev,
      [question.id]: { last: choice, correct, tries: old.tries + 1, right: old.right + (correct ? 1 : 0), at: Date.now() },
    };
  });
  return correct;
}
