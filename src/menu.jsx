// MENU — style ticket de caisse / carte à la craie
function Menu(){
  const [cat, setCat] = React.useState("entrees");

  const CATS = {
    entrees: {
      label:"Pour commencer",
      items: [
        { n:"Panisses du port", d:"Pois chiche, fleur de sel, citron vert. Croustillant dehors, fondant dedans.", p:"220 ฿", tag:"Classique"},
        { n:"Pan-bagnat × Som Tam", d:"Thon à l’huile, œuf, papaye verte, piment oiseau. Marseille meets Bangkok.", p:"280 ฿", tag:"Signé"},
        { n:"Anchoiade & cruditeilles", d:"Anchois fraîns, ail, huile d’olive AOC. On trempe tout.", p:"240 ฿"},
        { n:"Tom yum de coquillages", d:"Moules, palourdes, citronnelle, safran. Le plus méd’ des tom yums.", p:"320 ฿", tag:"◆ Nouveau"},
      ]
    },
    plats: {
      label:"Les plats",
      items: [
        { n:"LA BOUILLABAISSE", d:"Poissons du jour, rouille maison, croutons aillotis, safran. Pour 2 pers. min.", p:"1 580 ฿ / 2p", tag:"Emblématique", big:true},
        { n:"Daurade grillée à la braise", d:"Herbes de Provence, kaffir, beurre de citron-vert.", p:"620 ฿"},
        { n:"Aioli tropical", d:"Morue dessalée, légumes vapeur, sauce aioli. Le vendredi midi.", p:"480 ฿"},
        { n:"Pistou de riz thai", d:"Basilic thai, pignons, parmesan, huile d’olive. Risotto ou pas risotto.", p:"390 ฿"},
        { n:"Pieds-paquets épicés", d:"Nam phrik, abats provencaux, estragon. Pour les vrais.", p:"440 ฿", tag:"Fort"},
      ]
    },
    dolce: {
      label:"Du sucré",
      items: [
        { n:"Navette-mangue", d:"Navette de Marseille, fleur d’oranger, mangue de Surat Thani.", p:"180 ฿"},
        { n:"Pastis sticky rice", d:"Riz gluant coco, pastis 51 en vapeur. Ça dégomme.", p:"210 ฿", tag:"21+"},
        { n:"Calisson volcan", d:"Calisson d’Aix, coulis de tamarin, poivre long.", p:"200 ฿"},
      ]
    },
    boire: {
      label:"À boire",
      items: [
        { n:"Ricard plage", d:"51, eau de source, glace pilée, feuille de menthe thai.", p:"180 ฿"},
        { n:"Rosé de Cassis", d:"Clos Sainte-Magdeleine, 75cl. Le vrai.", p:"1 400 ฿"},
        { n:"Chang pressé", d:"Chang, citron vert, fleur de sel au bord.", p:"160 ฿"},
        { n:"Café cancà", d:"Café thï, lait concentré, cardamome.", p:"120 ฿"},
      ]
    }
  };

  const items = CATS[cat].items;

  return (
    <section id="menu" style={{
      position:"relative", background:"var(--bleu)", color:"var(--creme)",
      padding:"110px 28px 120px", overflow:"hidden",
    }}>
      {/* decorative big outline */}
      <div aria-hidden className="disp u" style={{
        position:"absolute", bottom:-40, left:-30, fontSize:"clamp(140px, 26vw, 360px)",
        color:"transparent", WebkitTextStroke:"2px var(--ciel)", opacity:.14, letterSpacing:"-.02em",
        lineHeight:.85, pointerEvents:"none"
      }}>LA CARTE</div>

      <div style={{maxWidth:1300, margin:"0 auto", position:"relative"}}>
        <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:20, flexWrap:"wrap"}}>
          <SectionTag num="03" label="LA CARTE" color="var(--creme)"/>
          <Tape rotate={3} color="var(--orange)">fresh · daily · bon</Tape>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1.2fr .8fr", gap:40, alignItems:"end"}} className="menu-head">
          <h2 className="disp u" style={{margin:0, fontSize:"clamp(54px, 10vw, 160px)", letterSpacing:"-.02em", lineHeight:.88}}>
            Ce soir<br/><span style={{color:"var(--jaune)"}}>on mange</span>
          </h2>
          <p style={{fontFamily:"'Archivo Narrow',sans-serif", fontWeight:500, fontSize:18, lineHeight:1.4, margin:0, maxWidth:420}}>
            La carte tourne avec le marché et la pêche. Si c’est pas bon, c’est pas dans l’assiette.
            Une allergie ? Dis-le, on s’adapte.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{
          display:"flex", gap:10, marginTop:44, flexWrap:"wrap",
          borderBottom:"1.5px solid rgba(243,237,224,.25)", paddingBottom:12,
        }}>
          {Object.entries(CATS).map(([k,v])=>(
            <button key={k} onClick={()=>setCat(k)} className="disp u" style={{
              padding:"10px 16px", border:"2px solid var(--creme)",
              background: cat===k ? "var(--jaune)" : "transparent",
              color: cat===k ? "var(--noir)" : "var(--creme)",
              cursor:"pointer", fontSize:15, letterSpacing:".02em",
              transform: cat===k ? "rotate(-1.5deg)" : "rotate(0)",
              boxShadow: cat===k ? "4px 4px 0 var(--noir)" : "none",
              transition:"all .15s ease",
            }}>
              {v.label}
            </button>
          ))}
        </div>

        {/* Items grid as ticket cards */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:18, marginTop:32,
        }} className="menu-grid">
          {items.map((it,i)=>(
            <MenuCard key={`${cat}-${i}`} it={it} i={i}/>
          ))}
        </div>

        {/* Footer strip */}
        <div style={{
          marginTop:40, padding:"14px 18px", border:"1.5px dashed var(--creme)",
          display:"flex", justifyContent:"space-between", gap:14, flexWrap:"wrap",
        }} className="mono u">
          <span style={{fontSize:11, letterSpacing:".18em"}}>■ Prix en THB / TVA inclus</span>
          <span style={{fontSize:11, letterSpacing:".18em"}}>■ Menu qui tourne — demande au serveur</span>
          <span style={{fontSize:11, letterSpacing:".18em"}}>■ 10% service si t’es content</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          .menu-head{ grid-template-columns: 1fr !important; }
          .menu-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function MenuCard({it, i}){
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        position:"relative", background:"var(--creme)", color:"var(--noir)",
        padding:"22px 22px 20px", border:"1.5px solid var(--noir)",
        gridColumn: it.big ? "1 / -1" : "auto",
        transform: hover ? "translate(-3px,-3px) rotate(-.3deg)" : `rotate(${(i%2?.4:-.4)}deg)`,
        boxShadow: hover ? "10px 10px 0 var(--jaune)" : "5px 5px 0 var(--noir)",
        transition:"all .2s ease",
      }}>
      {/* punched holes */}
      <div style={{position:"absolute", left:10, top:10, display:"flex", gap:6}}>
        {[0,1,2].map(i=><span key={i} style={{width:6, height:6, borderRadius:"50%", background:"var(--noir)", opacity:.8}}/>)}
      </div>
      {/* sticker tag */}
      {it.tag && (
        <div style={{position:"absolute", right:-8, top:-8, zIndex:2}}>
          <Sticker rotate={6} bg={it.tag.includes("Nouveau")? "var(--orange)" : it.tag==="Fort" ? "var(--rouge)" : "var(--jaune)"}
            fg={it.tag==="Fort"? "var(--creme)" : "var(--noir)"} size={10}>
            {it.tag}
          </Sticker>
        </div>
      )}

      <div style={{
        display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:14,
        marginTop: 8,
      }}>
        <h3 className="disp u" style={{
          margin:0, fontSize: it.big ? "clamp(28px, 3.2vw, 44px)" : "clamp(20px, 2.2vw, 28px)",
          letterSpacing:"-.01em", lineHeight:1,
        }}>{it.n}</h3>
        <div className="mono u" style={{
          fontSize:14, letterSpacing:".1em", whiteSpace:"nowrap",
          padding:"3px 8px", background:"var(--noir)", color:"var(--creme)"
        }}>{it.p}</div>
      </div>

      <p className="narrow" style={{margin:"10px 0 0", fontWeight:500, fontSize: it.big? 17 : 15, lineHeight:1.4, maxWidth: it.big? "80%" : "100%"}}>
        {it.d}
      </p>

      {/* dashed cut line */}
      <div style={{marginTop:14, borderTop:"1.5px dashed var(--noir)", opacity:.5}}/>
      <div className="mono u" style={{display:"flex", justifyContent:"space-between", marginTop:8, fontSize:10, letterSpacing:".18em", opacity:.65}}>
        <span>N° {String(100+i).padStart(3,"0")}</span>
        <span>{it.big ? "signature" : "cuisine ouverte"}</span>
      </div>
    </div>
  );
}

Object.assign(window, { Menu });
