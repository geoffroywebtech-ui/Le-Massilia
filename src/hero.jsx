// HERO — explosif, street, marseillais
function Hero({ heroWord = "MASSALIA" }){
  const [mouse, setMouse] = React.useState({x:0.5, y:0.5});
  const [time, setTime] = React.useState("");

  React.useEffect(()=>{
    const onMove = (e)=> {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove);
    return ()=> window.removeEventListener("mousemove", onMove);
  },[]);

  React.useEffect(()=>{
    const update = ()=>{
      // Koh Samui = UTC+7
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset()*60000;
      const ksm = new Date(utc + 7*3600000);
      const hh = String(ksm.getHours()).padStart(2,"0");
      const mm = String(ksm.getMinutes()).padStart(2,"0");
      setTime(`${hh}:${mm}`);
    };
    update();
    const id = setInterval(update, 30000);
    return ()=> clearInterval(id);
  },[]);

  const px = (mouse.x - 0.5) * 14;
  const py = (mouse.y - 0.5) * 14;

  return (
    <section id="top" style={{
      position:"relative", minHeight:"100vh", overflow:"hidden",
      background:"var(--bleu)", color:"var(--creme)", paddingTop:88,
    }}>
      {/* Blueprint grid */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none", opacity:.18,
        backgroundImage:`linear-gradient(var(--ciel) 1px, transparent 1px),
                         linear-gradient(90deg, var(--ciel) 1px, transparent 1px)`,
        backgroundSize:"44px 44px",
        maskImage:"radial-gradient(ellipse at 50% 40%, #000 40%, transparent 80%)",
      }}/>

      {/* Sun/disc */}
      <div style={{
        position:"absolute", right:"-8vw", top:"12vh", width:"48vw", height:"48vw",
        borderRadius:"50%", background:"var(--jaune)",
        boxShadow:"inset -20px -40px 0 rgba(234,90,30,.4)",
        transform:`translate(${px*-1.2}px, ${py*-1.2}px)`,
        transition:"transform .4s ease-out",
      }}/>

      {/* Palm-y shapes — abstract stripes */}
      <div style={{
        position:"absolute", left:"-6vw", bottom:"-4vh", width:"32vw", height:"60vh",
        background:`repeating-linear-gradient(112deg, var(--bleu-2) 0 10px, transparent 10px 22px)`,
        transform:`translate(${px*0.6}px, ${py*0.6}px)`,
      }}/>

      {/* --- Main content --- */}
      <div style={{
        position:"relative", zIndex:2, maxWidth:1400, margin:"0 auto",
        padding:"3vh 28px 0",
      }}>
        {/* top meta bar */}
        <div className="mono u" style={{
          display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12,
          fontSize:11, letterSpacing:".18em", opacity:.9, marginBottom:"2vh",
        }}>
          <span>■ EST. 2024 — KOH SAMUI, THAILAND</span>
          <span>■ N 9°28'  E 100°02'</span>
          <span>■ LOCAL TIME {time}</span>
          <span>■ «LE PLUS MARSEILLAIS DES RESTOS THÏS»</span>
        </div>

        {/* Title grid */}
        <div style={{
          position:"relative", marginTop:"2vh",
        }}>
          {/* Badge circle top-left */}
          <div style={{position:"absolute", left:-8, top:-10, zIndex:3}}>
            <Sticker shape="circle" bg="var(--rouge)" fg="var(--creme)" rotate={-12} size={11} style={{
              width:118, height:118,
              boxShadow:"3px 4px 0 rgba(0,0,0,.85)",
              padding:"0 12px",
            }}>
              BOUILLABAISSE<br/>· TOM YUM ·<br/>MÊME COMBAT
            </Sticker>
          </div>

          {/* Right cluster: stamp + sticker */}
          <div style={{position:"absolute", right:10, top:-10, display:"flex", flexDirection:"column", gap:10, alignItems:"flex-end", zIndex:3}}>
            <Stamp text="LE MASSALIA · KOH SAMUI · EST.2024 · " inner="M" color="var(--jaune)" size={132} rotate={8}/>
            <Sticker rotate={4} bg="var(--creme)" fg="var(--bleu)" size={12}>
              ◆ OUVERT CE SOIR
            </Sticker>
          </div>

          <h1 className="disp u" style={{
            margin:0, fontSize:"clamp(72px, 16vw, 260px)",
            letterSpacing:"-.02em", lineHeight:.82,
            textAlign:"center",
          }}>
            <span style={{display:"block"}}>LE</span>
            <span style={{display:"block",
              color:"var(--jaune)",
              textShadow:"6px 6px 0 var(--orange)",
              transform:`translate(${px*-0.3}px, 0)`,
              position:"relative"
            }}>
              {heroWord.slice(0, Math.floor(heroWord.length/2))}<span style={{color:"var(--creme)", WebkitTextStroke:"3px var(--noir)"}}>{heroWord[Math.floor(heroWord.length/2)]}</span>{heroWord.slice(Math.floor(heroWord.length/2)+1)}
            </span>
            <span style={{display:"block", fontSize:"clamp(22px,2.6vw,44px)", letterSpacing:".02em", fontFamily:"'Archivo Narrow',sans-serif", fontWeight:700, marginTop:10}}>
              — BISTROT MÉDITÉRRANÉEN · KOH SAMUI —
            </span>
          </h1>
        </div>

        {/* sub grid: left words, right mini */}
        <div style={{
          display:"grid", gridTemplateColumns:"1.1fr .9fr", gap:30, marginTop:"6vh",
          alignItems:"end"
        }} className="hero-sub">
          <div>
            <p style={{
              maxWidth:540, fontSize:"clamp(17px,1.4vw,22px)", lineHeight:1.35,
              fontFamily:"'Archivo Narrow',sans-serif", fontWeight:500,
            }}>
              Du Vieux-Port à Chaweng Beach. Aioli, pastis, pan-bagnat, 
              poisson grillé, riz sauteillé au basilic thaï. On cuisine comme on parle —
              <span className="hand" style={{fontSize:"1.35em", color:"var(--jaune)"}}> fort et avec les mains.</span>
            </p>

            <div style={{display:"flex", gap:14, flexWrap:"wrap", marginTop:22, alignItems:"center"}}>
              <a href="#reserve" className="disp u" style={{
                background:"var(--creme)", color:"var(--bleu)", padding:"18px 26px",
                fontSize:18, textDecoration:"none",
                border:"2px solid var(--noir)", boxShadow:"5px 5px 0 var(--noir)",
              }}>Réserver une table</a>
              <a href="#menu" className="disp u" style={{
                background:"transparent", color:"var(--creme)", padding:"18px 26px",
                fontSize:18, textDecoration:"none",
                border:"2px solid var(--creme)",
              }}>Voir la carte →</a>
            </div>

            <div style={{marginTop:26, display:"flex", gap:16, alignItems:"center"}}>
              <Arrow color="var(--jaune)" style={{transform:"rotate(10deg)"}}/>
              <span className="hand" style={{color:"var(--jaune)", fontSize:26, transform:"rotate(-3deg)", display:"inline-block"}}>
                viens, on t’attend !
              </span>
            </div>
          </div>

          {/* Right: photo placeholder stack */}
          <div style={{position:"relative", height:360}}>
            <div style={{
              position:"absolute", right:10, top:0, width:"78%",
              transform:"rotate(3deg)", boxShadow:"10px 10px 0 var(--noir)"
            }}>
              <Placeholder label="bouillabaisse thaï / hero" tone="orange" w={900} h={700}/>
              <div className="mono u" style={{
                position:"absolute", left:10, top:10, background:"var(--creme)", color:"var(--noir)",
                padding:"4px 8px", fontSize:10, letterSpacing:".14em"
              }}>N° 001</div>
            </div>
            <div style={{
              position:"absolute", left:-10, bottom:-20, width:"52%",
              transform:"rotate(-6deg)", boxShadow:"6px 6px 0 var(--noir)"
            }}>
              <Placeholder label="salle / ambiance" tone="ciel" w={700} h={500}/>
            </div>
            <div style={{position:"absolute", right:-6, bottom:-30, zIndex:3}}>
              <Sticker rotate={-10} bg="var(--jaune)" fg="var(--noir)" size={14}>
                100% FRAIS • 100% FORT
              </Sticker>
            </div>
          </div>
        </div>

        {/* bottom scroll hint */}
        <div style={{
          marginTop:"6vh", paddingBottom:"3vh",
          display:"flex", justifyContent:"space-between", alignItems:"center", gap:20, flexWrap:"wrap"
        }}>
          <div className="mono u" style={{fontSize:11, letterSpacing:".2em", display:"flex", alignItems:"center", gap:10}}>
            <span style={{width:40, height:1, background:"currentColor", display:"inline-block"}}/>
            SCROLL POUR GOÛTER
          </div>
          <div className="mono u" style={{fontSize:11, letterSpacing:".2em", opacity:.7}}>
            01 / 07 — ACCUEIL
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px){
          .hero-sub{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero });
