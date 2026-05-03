// Header.jsx — PangChu Studio sticky nav
const Header = ({ active, onNav }) => {
  const links = ['game', 'links', 'about'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backdropFilter: 'blur(18px)',
      background: 'rgba(246,251,255,0.75)',
      borderBottom: '1px solid rgba(92,151,201,0.12)',
    }}>
      <div style={{ width: 'min(calc(100% - 32px), 1120px)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', gap: 16 }}>
        <a onClick={() => onNav('top')} style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, letterSpacing: '-0.03em', fontSize: 17, color: '#17324d', cursor: 'pointer', textDecoration: 'none' }}>
          <span style={{
            width: 42, height: 42, borderRadius: 14, display: 'grid', placeItems: 'center',
            background: 'linear-gradient(135deg, #7fd0ff, #8be7c7)',
            boxShadow: '0 12px 30px rgba(64,145,210,0.24)',
            color: 'white', fontSize: 18, fontWeight: 900, flexShrink: 0,
          }}>P</span>
          PangChu Studio
        </a>
        <nav style={{ display: 'flex', gap: 4 }}>
          {links.map(l => (
            <a key={l} onClick={() => onNav(l)} style={{
              padding: '10px 14px', borderRadius: 999, fontSize: 14, fontWeight: 700, cursor: 'pointer',
              color: active === l ? '#3399ee' : '#587089',
              background: active === l ? 'rgba(89,184,255,0.12)' : 'transparent',
              transition: 'background 0.15s, color 0.15s', textDecoration: 'none',
            }}
            onMouseEnter={e => { if (active !== l) { e.currentTarget.style.background = 'rgba(89,184,255,0.1)'; e.currentTarget.style.color = '#3399ee'; }}}
            onMouseLeave={e => { if (active !== l) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#587089'; }}}
            >{l.charAt(0).toUpperCase() + l.slice(1)}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};
Object.assign(window, { Header });
