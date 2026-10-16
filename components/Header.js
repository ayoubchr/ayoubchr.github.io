import Link from 'next/link';

const NAV = [
  ['/', 'Leerpaden'],
  ['/examens', 'Examens'],
  ['/oefenen', 'Oefenen'],
  ['/fouten', 'Mijn fouten'],
  ['/bronnen', 'Bronnen'],
];

// crumbs: [[href, label], ..., [null, huidige pagina]]
export default function Header({ crumbs, active }) {
  return (
    <>
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Tabieb2be, naar vakken">
          <span className="brandmark" aria-hidden="true">
            <img src="/logo.png" alt="" />
          </span>
          <span>
            Tabieb<span className="brand-highlight">2be</span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Hoofdmenu">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={active === href ? 'active' : ''} aria-current={active === href ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <span className="header-label">KIW · TOELATINGSEXAMEN 2026</span>
      </header>
      {crumbs && (
        <nav className="crumb" aria-label="Kruimelpad">
          {crumbs.map(([href, label], i) => (
            <span key={i} className="crumb-part">
              {i > 0 && <span>›</span>}
              {href ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}
            </span>
          ))}
        </nav>
      )}
    </>
  );
}
