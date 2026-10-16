const shapes = {
  wiskunde: '<path d="M12 10v44h43"/><path d="M18 45c8-1 11-20 20-22s9 19 18 21"/><circle cx="38" cy="23" r="3" fill="currentColor" stroke="none"/>',
  fysica: '<path d="M10 13h44M32 13l15 29"/><circle cx="48" cy="46" r="8"/><path d="M16 40c7 10 19 14 29 12" stroke-dasharray="3 5"/>',
  chemie: '<circle cx="32" cy="15" r="7"/><circle cx="13" cy="45" r="7"/><circle cx="51" cy="45" r="7"/><path d="M28 22 17 38m19-16 11 16M20 45h24"/>',
  biologie: '<path d="M20 7c32 13-8 36 24 50M44 7C12 20 52 44 20 57M23 14h18M18 25h28M20 37h24M23 49h18"/>',
};

export default function SubjectGlyph({ id }) {
  return (
    <svg
      className="glyph"
      viewBox="0 0 64 64"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: shapes[id] || shapes.wiskunde }}
    />
  );
}
