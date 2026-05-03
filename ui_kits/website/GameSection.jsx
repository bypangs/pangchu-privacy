// GameSection.jsx — Featured game section
const GameSection = () => {
  const features = [
    { title: 'Simple controls', desc: 'Easy to pick up and comfortable for casual mobile play.' },
    { title: 'Charming style', desc: 'Cloudy skies, soft colors, and a cozy cat-themed identity.' },
    { title: 'Arcade rhythm', desc: 'Quick runs, repeatable challenge, and score-focused fun.' },
  ];
  return (
    <section id="game" style={{ padding: '18px 0' }}>
      <div style={{ width: 'min(calc(100% - 32px), 1120px)', margin: '0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:16, marginBottom:18 }}>
          <div>
            <h2 style={{ margin:'0 0 8px', fontSize:28, fontWeight:800, letterSpacing:'-0.03em', color:'#17324d' }}>Featured game</h2>
            <p style={{ margin:0, color:'#587089', lineHeight:1.7, fontSize:16 }}>Our current title — soft, cheerful, and built for everyone.</p>
          </div>
        </div>

        <article style={{ background:'rgba(255,255,255,0.82)', border:'1px solid rgba(92,151,201,0.18)', boxShadow:'0 20px 60px rgba(67,133,193,0.14)', borderRadius:28, display:'grid', gridTemplateColumns:'1.08fr 0.92fr', overflow:'hidden' }}>
          {/* Visual panel */}
          <div style={{
            padding:24,
            background: 'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.95), transparent 22%), radial-gradient(circle at 75% 18%, rgba(255,255,255,0.9), transparent 18%), linear-gradient(180deg,#8fd8ff 0%,#bdeaff 52%,#e6fff4 100%)',
            borderRight:'1px solid rgba(92,151,201,0.14)',
          }}>
            <div style={{ background:'rgba(255,255,255,0.72)', border:'1px solid rgba(255,255,255,0.7)', borderRadius:24, padding:14, boxShadow:'0 16px 34px rgba(82,149,201,0.16)' }}>
              <img src="../../assets/jelly-cat-jump-banner.png" alt="MalrangNyang Jelly Cat Jump" style={{ display:'block', width:'100%', borderRadius:18 }} />
            </div>
          </div>

          {/* Body panel */}
          <div style={{ padding:32, display:'flex', flexDirection:'column', justifyContent:'center', gap:20 }}>
            <span style={{ display:'inline-flex', width:'fit-content', padding:'8px 14px', borderRadius:999, background:'rgba(138,228,197,0.18)', color:'#19936d', fontSize:13, fontWeight:800, letterSpacing:'0.02em' }}>Cute Casual Mobile Game</span>
            <h3 style={{ margin:0, fontSize:'clamp(26px,3.5vw,40px)', lineHeight:1.02, letterSpacing:'-0.04em', fontWeight:800, color:'#17324d' }}>MalrangNyang<br/>(Jelly Cat Jump)</h3>
            <p style={{ margin:0, color:'#587089', lineHeight:1.7, fontSize:15 }}>A soft and cheerful jumping game built around cute cat energy, approachable controls, and a light, playful mood.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
              {features.map(f => (
                <div key={f.title} style={{ padding:16, borderRadius:22, background:'rgba(255,255,255,0.92)', border:'1px solid rgba(92,151,201,0.18)', boxShadow:'0 20px 60px rgba(67,133,193,0.14)' }}>
                  <strong style={{ display:'block', marginBottom:6, fontSize:14, fontWeight:800, color:'#17324d' }}>{f.title}</strong>
                  <span style={{ color:'#587089', lineHeight:1.6, fontSize:13 }}>{f.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
Object.assign(window, { GameSection });
