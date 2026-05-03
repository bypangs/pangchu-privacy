// Footer.jsx — PangChu Studio footer
const Footer = () => (
  <footer style={{ padding: '40px 0 60px' }}>
    <div style={{ width: 'min(calc(100% - 32px), 1120px)', margin: '0 auto' }}>
      <div style={{
        padding: '24px 28px',
        background: 'rgba(255,255,255,0.72)',
        border: '1px solid rgba(92,151,201,0.18)',
        borderRadius: 28,
        boxShadow: '0 20px 60px rgba(67,133,193,0.14)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 18,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize:18, fontWeight:800, marginBottom:6, color:'#17324d' }}>PangChu Studio</div>
          <p style={{ margin:0, color:'#587089', fontSize:14, lineHeight:1.7 }}>Official website for studio information and game-related policy pages.</p>
        </div>
        <div style={{ color:'#587089', fontSize:14 }}>© 2026 PangChu Studio. All rights reserved.</div>
      </div>
    </div>
  </footer>
);
Object.assign(window, { Footer });
