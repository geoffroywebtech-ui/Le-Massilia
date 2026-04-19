function Footer(){
  return (
    <footer style={{
      background:"var(--bleu-2)", color:"var(--creme)",
      padding:"80px 28px 30px", position:"relative", overflow:"hidden",
    }}>
      <div aria-hidden className="disp u" style={{
        position:"absolute", bottom:-60, left:"50%", transform:"translateX(-50%)",
        fontSize:"clamp(100px, 22vw, 300px)", letterSpacing:"-.03em",
        color:"var(--bleu)", lineHeight:.8, pointerEvents:"none", whiteSpace:"nowrap"
      }}>MASSALIA</div>

      <div style={{maxWidth:1300, margin:"0 auto", position:"relative"}}>
        <div style={{display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:30}} className="foot-grid">
          <div>
            <div className="disp u" style={{fontSize:34, letterSpacing:"-.01em"}}>LE MASSALIA</div>
            <div className="mono u" style={{fontSize:11, letterSpacing:".18em", opacity:.8, marginTop:4}}>
              BISTROT MÉDITÉRRANÉEN · KOH SAMUI
            </div>
            <p className="narrow" style={{fontSize:15, fontWeight:500, maxWidth:380, lineHeight:1.45, marginTop:14}}>
              Une cuisine honnête entre Marseille et Samui. Bon produit, bonne musique, bonne compagnie.
            </p>
          </div>
          <FooterCol title="Naviguer" links={[["Carte","#menu"],["Histoire","#story"],["Galerie","#gallery"],["Réserver","#reserve"]]}/>
          <FooterCol title="Trouver" links={[["Chaweng Beach Rd","#find"],["+66 77 000 000","tel:+6677000000"],["bonjour@lemassalia.com","mailto:bonjour@lemassalia.com"]]}/>
          <FooterCol title="Suivre" links={[["Instagram →","#"],["TikTok →","#"],["Facebook →","#"]]}/>
        </div>

        <div style={{
          marginTop:50, paddingTop:20, borderTop:"1.5px dashed rgba(243,237,224,.3)",
          display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12,
        }} className="mono u">
          <span style={{fontSize:11, letterSpacing:".18em"}}>© 2026 LE MASSALIA · FAIT AVEC DE L’AIL</span>
          <span style={{fontSize:11, letterSpacing:".18em"}}>MRS — KSM / 9 003 KM</span>
          <span style={{fontSize:11, letterSpacing:".18em"}}>MENTIONS LÉGALES · ALLERGÈNES</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          .foot-grid{ grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px){
          .foot-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }){
  return (
    <div>
      <div className="mono u" style={{fontSize:11, letterSpacing:".18em", opacity:.7}}>{title}</div>
      <ul style={{listStyle:"none", margin:"12px 0 0", padding:0, display:"flex", flexDirection:"column", gap:8}}>
        {links.map(([l,h])=>(
          <li key={l}><a href={h} className="narrow" style={{textDecoration:"none", color:"var(--creme)", fontWeight:600, fontSize:15}}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { Footer });
