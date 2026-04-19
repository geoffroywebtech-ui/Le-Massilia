// GALLERY — scattered polaroids with marquee between
function Gallery(){
  const shots = [
    { label:"terrasse · sunset", tone:"orange", w:900, h:700, rot:-3, caption:"Terrasse — golden hour"},
    { label:"assiette / daurade", tone:"creme", w:700, h:900, rot:2.5, caption:"Daurade, beurre kaffir"},
    { label:"bar · pastis", tone:"bleu", w:800, h:600, rot:-1.5, caption:"Le bar — mardi pastis"},
    { label:"cuisine ouverte", tone:"jaune", w:900, h:700, rot:1.8, caption:"Coup de feu"},
    { label:"karim · chef", tone:"noir", w:700, h:900, rot:-2.2, caption:"Le patron"},
    { label:"apero / samedi", tone:"ciel", w:900, h:700, rot:3, caption:"Samedi, 19h"},
  ];

  return (
    <>
    <Marquee bg="var(--jaune)" fg="var(--noir)" speed={32}>
      {[
        "★ LE MASSALIA",
        "KOH SAMUI — CHAWENG",
        "OUVERT TOUS LES SOIRS",
        "FRESH CATCH DAILY",
        "BOUILLABAISSE LE VENDREDI",
        "APERO DES 17H",
      ]}
    </Marquee>

    <section id="gallery" style={{
      position:"relative", background:"var(--creme-2)", color:"var(--encre)",
      padding:"110px 28px 120px", overflow:"hidden",
    }}>
      <div style={{maxWidth:1300, margin:"0 auto"}}>
        <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:14}}>
          <SectionTag num="04" label="DANS LA MAISON"/>
          <Tape rotate={-3} color="var(--ciel)">snapshots / pas de filtre</Tape>
        </div>

        <h2 className="disp u" style={{margin:"0 0 40px", fontSize:"clamp(48px, 8vw, 120px)", letterSpacing:"-.02em", lineHeight:.9}}>
          Ambiance <span style={{color:"var(--rouge)"}}>maison</span>.
        </h2>

        <div style={{
          display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:18,
        }} className="gal-grid">
          {shots.map((s,i)=>(
            <Polaroid key={i} {...s} span={[6,4,5,7,4,8][i]} offsetY={[0,40,0,30,10,0][i]}/>
          ))}
        </div>

        {/* Press strip */}
        <div style={{marginTop:80, display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:18}} className="press-grid">
          {[
            { name:"Time Out BKK", quote:"« L’adresse qu’on ne s’attendait pas à aimer autant. »", score:"9.1"},
            { name:"Le Routard", quote:"« Un bout de Marseille sur sable blanc. »", score:"★★★★★"},
            { name:"Monocle Magazine", quote:"« Inventif sans traîner son identité dans la boue. »", score:"Top 10"},
            { name:"Samui Local", quote:"« Le chef sait ce qu’il fait. On revient. »", score:"4.8/5"},
          ].map((p,i)=>(
            <div key={i} style={{
              border:"1.5px solid var(--noir)", background:"var(--creme)",
              padding:"16px 16px 14px", transform:`rotate(${[-1,.5,-.5,.8][i]}deg)`,
              boxShadow:"4px 4px 0 var(--noir)"
            }}>
              <div className="mono u" style={{fontSize:11, letterSpacing:".16em", color:"var(--bleu)"}}>{p.name}</div>
              <p className="narrow" style={{margin:"8px 0 0", fontSize:15, fontWeight:600, lineHeight:1.35}}>{p.quote}</p>
              <div className="disp u" style={{marginTop:12, fontSize:18, color:"var(--orange)"}}>{p.score}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          .gal-grid{ grid-template-columns: repeat(6, 1fr) !important; }
          .press-grid{ grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px){
          .gal-grid{ grid-template-columns: 1fr !important; }
          .press-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>

    <Marquee bg="var(--bleu)" fg="var(--creme)" speed={36} reverse>
      {[
        "RESERVEZ → +66 77 000 000",
        "CHAWENG BEACH ROAD",
        "OUVERT 18H — MINUIT",
        "★ DJ SET LE SAMEDI",
        "◆ LIVE MUSIC JEUDI",
      ]}
    </Marquee>
    </>
  );
}

function Polaroid({ label, tone, w, h, rot=0, caption, span=4, offsetY=0}){
  const [hovering, setHovering] = React.useState(false);
  return (
    <div
      onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
      style={{
        gridColumn:`span ${span}`, transform: `rotate(${rot}deg) translateY(${offsetY}px)`,
        transformOrigin:"center",
        transition:"transform .3s ease",
      }}>
      <div style={{
        background:"var(--creme)", padding:"14px 14px 44px",
        boxShadow: hovering ? "8px 12px 0 var(--bleu)" : "4px 6px 0 var(--noir)",
        transition:"all .3s ease",
        transform: hovering ? "scale(1.03) rotate(-.5deg)" : "none",
      }}>
        <Placeholder label={label} tone={tone} w={w} h={h}/>
        <div className="hand" style={{
          marginTop:10, fontSize:18, color:"var(--bleu)", textAlign:"center", lineHeight:1
        }}>{caption}</div>
      </div>
    </div>
  );
}

Object.assign(window, { Gallery });
