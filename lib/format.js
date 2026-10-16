// Tekstopmaak uit de offline versie: matrices en vectornotatie leesbaar maken.
export const renderMatrix = (rows, label = '') =>
  `<span class="math-matrix" role="img" aria-label="${label ? label + ' = ' : ''}matrix met rijen ${rows.map(row => row.join(', ')).join(' en ')}"><span class="matrix-bracket" aria-hidden="true">[</span><span class="matrix-values" aria-hidden="true">${rows.flat().map(n => `<span>${n}</span>`).join('')}</span><span class="matrix-bracket" aria-hidden="true">]</span></span>`;

export const escapeHTML = value =>
  String(value).replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));

export const formatLearningText = value =>
  String(value)
    .replace(/\[\[[^\[\]]+\],\s*\[[^\[\]]+\]\]/g, raw => {
      try {
        const rows = JSON.parse(raw);
        if (rows.length === 2 && rows.every(row => row.length === 2)) return renderMatrix(rows);
      } catch {}
      return raw;
    })
    .replace(/F⃗ = qE⃗/g, 'de vectorregel F = q · E')
    .replace(/E⃗ₜₒₜ/g, 'de totale veldvector E')
    .replace(/F⃗/g, 'de krachtvector F')
    .replace(/E⃗/g, 'de veldvector E');

// Inhoud van het leerpad is eigen, vertrouwde HTML.
export const html = value => ({ __html: value });
