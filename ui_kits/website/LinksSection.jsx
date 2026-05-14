// LinksSection.jsx — Official links section
const LinksSection = () => {
  const links = [
    { title: 'Privacy Policy', desc: 'Read the privacy policy for PangChu Studio services and the featured game.', href: '#' },
    { title: 'Terms of Service', desc: 'Read the terms and conditions governing the use of this website and related services.', href: '#' },
    { title: 'Official Website', desc: 'Open the canonical PangChu Studio homepage on pangchustudio.co.kr.', href: 'https://pangchustudio.co.kr/' },
  ];
  return (
    <section id="links" style={{ padding: '18px 0' }}>
      <div style={{ width: 'min(calc(100% - 32px), 1120px)', margin: '0 auto' }}>
        <div style={{ marginBottom: 18 }}>
          <h2 style={{ margin:'0 0 8px', fontSize:28, fontWeight:800, letterSpacing:'-0.03em', color:'#17324d' }}>Official links</h2>
          <p style={{ margin:0, color:'#587089', lineHeight:1.7, fontSize:16 }}>Pages most likely needed for platform submissions, customer support, and public reference.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
          {links.map(l => (
            <a key={l.title} href={l.href}
              style={{ background:'rgba(255,255,255,0.82)', border:'1px solid rgba(92,151,201,0.18)', boxShadow:'0 20px 60px rgba(67,133,193,0.14)', borderRadius:22, padding:22, display:'block', textDecoration:'none', transition:'transform 0.15s ease, border-color 0.15s ease', cursor:'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.borderColor='rgba(51,153,238,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(92,151,201,0.18)'; }}
            >
              <strong style={{ display:'block', marginBottom:8, fontSize:18, fontWeight:800, color:'#17324d' }}>{l.title}</strong>
              <p style={{ margin:0, color:'#587089', lineHeight:1.7, fontSize:14 }}>{l.desc}</p>
              <div style={{ marginTop:16, fontWeight:800, color:'#3399ee', fontSize:14 }}>Open page →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { LinksSection });
