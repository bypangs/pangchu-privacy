// Hero.jsx — PangChu Studio hero section
const Hero = ({ onNav }) => {
  const Btn = ({ primary, children, onClick }) => (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      minHeight: 50, padding: '0 22px', borderRadius: 999, fontWeight: 800, fontSize: 15,
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      cursor: 'pointer', border: primary ? 'none' : '1px solid rgba(89,184,255,0.22)',
      background: primary ? 'linear-gradient(135deg, #59b8ff, #3399ee)' : 'rgba(255,255,255,0.85)',
      color: primary ? 'white' : '#3399ee',
      boxShadow: primary ? '0 14px 28px rgba(51,153,238,0.24)' : '0 4px 14px rgba(67,133,193,0.10)',
      transition: 'transform 0.15s ease',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >{children}</button>
  );

  const Mini = ({ label, value }) => (
    <div style={{ padding: '14px 16px', borderRadius: 16, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(89,184,255,0.12)' }}>
      <strong style={{ display: 'block', fontSize: 18, fontWeight: 800, marginBottom: 4, color: '#17324d' }}>{label}</strong>
      <span style={{ color: '#587089', fontSize: 13 }}>{value}</span>
    </div>
  );

  return (
    <section style={{ padding: '52px 0 20px' }}>
      <div style={{ width: 'min(calc(100% - 32px), 1120px)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 26, alignItems: 'stretch' }}>
        {/* Main hero card */}
        <article style={{
          background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(92,151,201,0.18)',
          boxShadow: '0 20px 60px rgba(67,133,193,0.14)', borderRadius: 28,
          padding: 34, position: 'relative', overflow: 'hidden', minHeight: 400,
        }}>
          {/* CSS cloud decorations */}
          <div style={{ position:'absolute', width:190, height:64, right:34, top:42, background:'rgba(255,255,255,0.86)', borderRadius:999, filter:'blur(2px)', opacity:0.9, boxShadow:'-36px 14px 0 10px rgba(255,255,255,0.72), 46px 10px 0 8px rgba(255,255,255,0.74)', pointerEvents:'none' }}/>
          <div style={{ position:'absolute', width:160, height:56, left:52, bottom:52, background:'rgba(255,255,255,0.78)', borderRadius:999, filter:'blur(2px)', opacity:0.9, boxShadow:'-28px 10px 0 8px rgba(255,255,255,0.66), 38px 12px 0 10px rgba(255,255,255,0.7)', pointerEvents:'none' }}/>
          <div style={{ position:'relative', zIndex:1 }}>
            <span style={{ display:'inline-flex', padding:'8px 14px', borderRadius:999, background:'rgba(89,184,255,0.12)', color:'#3399ee', fontSize:13, fontWeight:800, letterSpacing:'0.02em', marginBottom:16 }}>Official Website</span>
            <h1 style={{ margin:0, fontSize:'clamp(38px,5vw,64px)', lineHeight:0.95, letterSpacing:'-0.05em', fontWeight:800, color:'#17324d' }}>PangChu Studio</h1>
            <p style={{ margin:'18px 0 0', maxWidth:580, color:'#587089', fontSize:18, lineHeight:1.7 }}>
              A small studio building cute and approachable mobile game experiences. Official home for studio information, policy pages, and <strong style={{color:'#17324d'}}>MalrangNyang (MalangNyang Jump)</strong>.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:12, marginTop:28 }}>
              <Btn primary onClick={() => onNav('game')}>View Game</Btn>
              <Btn onClick={() => onNav('links')}>Privacy Policy</Btn>
              <Btn onClick={() => onNav('links')}>Terms of Service</Btn>
            </div>
          </div>
        </article>

        {/* Side panels */}
        <div style={{ display:'grid', gap:18 }}>
          <aside style={{ background:'rgba(255,255,255,0.82)', border:'1px solid rgba(92,151,201,0.18)', boxShadow:'0 20px 60px rgba(67,133,193,0.14)', borderRadius:28, padding:24 }}>
            <div style={{ fontSize:13, fontWeight:800, color:'#14a56b', display:'inline-flex', alignItems:'center', gap:8, marginBottom:12 }}>
              <span style={{ width:10, height:10, borderRadius:999, background:'#16c47f', boxShadow:'0 0 0 6px rgba(22,196,127,0.12)', display:'inline-block' }}/>
              Active Website
            </div>
            <h2 style={{ margin:'0 0 8px', fontSize:22, letterSpacing:'-0.03em', fontWeight:800, color:'#17324d' }}>Official links are ready</h2>
            <p style={{ margin:0, color:'#587089', lineHeight:1.7, fontSize:14 }}>This website serves as the studio homepage for store listings, policy links, and game updates.</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:16 }}>
              <Mini label="Game" value="MalrangNyang" />
              <Mini label="Genre" value="Cute casual mobile" />
              <Mini label="Studio" value="PangChu Studio" />
              <Mini label="Pages" value="Home, Privacy, Terms" />
            </div>
          </aside>
          <aside id="about" style={{ background:'rgba(255,255,255,0.82)', border:'1px solid rgba(92,151,201,0.18)', boxShadow:'0 20px 60px rgba(67,133,193,0.14)', borderRadius:28, padding:24 }}>
            <h2 style={{ margin:'0 0 8px', fontSize:22, letterSpacing:'-0.03em', fontWeight:800, color:'#17324d' }}>About the studio</h2>
            <p style={{ margin:0, color:'#587089', lineHeight:1.7, fontSize:15 }}>PangChu Studio focuses on clean, friendly, easy-to-enjoy game experiences with soft visuals, simple controls, and charming presentation.</p>
          </aside>
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { Hero });
