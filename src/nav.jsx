// Top navigation bar
function Nav(){
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(()=>{
    const onS = ()=> setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onS, {passive:true});
    return ()=> window.removeEventListener("scroll", onS);
  },[]);

  const links = [
    ["Carte", "#menu"],
    ["Histoire", "#story"],
    ["Galerie", "#gallery"],
    ["Trouver", "#find"],
  ];

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:50,
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding: scrolled? "10px 22px" : "18px 28px",
      background: scrolled? "rgba(11,59,143,.96)" : "transparent",
      color: scrolled? "var(--creme)" : "var(--creme)",
      backdropFilter: scrolled? "blur(8px)" : "none",
      transition:"all .25s ease",
      borderBottom: scrolled? "1px solid rgba(243,237,224,.2)" : "1px solid transparent",
    }}>
      <a href="#top" style={{display:"flex", alignItems:"center", gap:10, textDecoration:"none", color:"inherit"}}>
        <span className="disp" style={{fontSize:22, letterSpacing:"-.01em"}}>LE MASSALIA</span>
        <span className="mono" style={{fontSize:10, opacity:.75, letterSpacing:".14em"}}>MRS → KSM</span>
      </a>

      <div style={{display:"flex", alignItems:"center", gap:22}}>
        <ul style={{display:"none", listStyle:"none", margin:0, padding:0, gap:22}} className="nav-links">
          {links.map(([l,h])=>(
            <li key={h}><a href={h} className="mono u" style={{fontSize:12, letterSpacing:".16em", textDecoration:"none"}}>{l}</a></li>
          ))}
        </ul>
        <a href="#reserve" className="disp u" style={{
          background:"var(--jaune)", color:"var(--noir)", padding:"10px 16px",
          fontSize:13, letterSpacing:".04em", textDecoration:"none",
          border:"2px solid var(--noir)", boxShadow:"3px 3px 0 var(--noir)",
          transform:"rotate(-1.5deg)", display:"inline-block"
        }}>Réserver »</a>
      </div>

      <style>{`
        @media (min-width: 720px){ nav .nav-links{ display:flex !important } }
      `}</style>
    </nav>
  );
}

Object.assign(window, { Nav });
