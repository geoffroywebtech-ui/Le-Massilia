// RESERVE + FIND section
function Reserve(){
  const [form, setForm] = React.useState({
    pax: 2, date:"", time:"19:30", name:"", phone:"", notes:""
  });
  const [sent, setSent] = React.useState(false);

  React.useEffect(()=>{
    // default date: today
    const d = new Date();
    const ksm = new Date(d.getTime() + (d.getTimezoneOffset() + 7*60)*60000);
    const yyyy = ksm.getFullYear();
    const mm = String(ksm.getMonth()+1).padStart(2,"0");
    const dd = String(ksm.getDate()).padStart(2,"0");
    setForm(f=>({...f, date:`${yyyy}-${mm}-${dd}`}));
  },[]);

  const times = ["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"];

  const submit = (e)=>{ e.preventDefault(); setSent(true); };

  return (
    <section id="reserve" style={{
      position:"relative", background:"var(--noir)", color:"var(--creme)",
      padding:"110px 28px 120px", overflow:"hidden"
    }}>
      {/* giant outline */}
      <div aria-hidden className="disp u" style={{
        position:"absolute", top:40, left:-30, fontSize:"clamp(130px, 24vw, 340px)",
        color:"transparent", WebkitTextStroke:"2px var(--jaune)", opacity:.12,
        lineHeight:.85, pointerEvents:"none", letterSpacing:"-.02em"
      }}>RÉSERVER</div>

      <div style={{maxWidth:1300, margin:"0 auto", position:"relative"}}>
        <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:14, flexWrap:"wrap"}}>
          <SectionTag num="05" label="RÉSERVATION" color="var(--creme)"/>
          <Tape rotate={-2} color="var(--orange)">books · avance conseillé</Tape>
        </div>

        <h2 className="disp u" style={{margin:"0 0 30px", fontSize:"clamp(56px, 9vw, 140px)", letterSpacing:"-.02em", lineHeight:.88}}>
          Une table,<br/><span style={{color:"var(--jaune)"}}>peuchère ?</span>
        </h2>

        <div style={{display:"grid", gridTemplateColumns:"1.1fr .9fr", gap:40}} className="reserve-grid">
          {/* Form */}
          <form onSubmit={submit} style={{
            background:"var(--creme)", color:"var(--noir)", padding:"28px 28px 30px",
            border:"2px solid var(--creme)", boxShadow:"10px 10px 0 var(--jaune)",
            position:"relative",
          }}>
            <div style={{position:"absolute", right:-12, top:-16}}>
              <Sticker shape="circle" bg="var(--rouge)" fg="var(--creme)" rotate={8} size={11} style={{width:96, height:96}}>
                TABLE<br/>POUR TOI
              </Sticker>
            </div>

            {sent ? (
              <div style={{padding:"30px 0"}}>
                <div className="disp u" style={{fontSize:36, letterSpacing:"-.01em"}}>Ouais !</div>
                <p className="narrow" style={{fontSize:17, fontWeight:500, lineHeight:1.4}}>
                  Ta demande est partie. On te rappelle dans la journée pour confirmer.
                  D’ici là, lave-toi les mains et mets une chemise.
                </p>
                <button onClick={()=>setSent(false)} className="disp u" style={{
                  marginTop:10, background:"var(--noir)", color:"var(--creme)",
                  padding:"12px 18px", border:"none", cursor:"pointer", fontSize:14
                }}>Nouvelle demande</button>
              </div>
            ) : (
              <>
                <div className="mono u" style={{fontSize:11, letterSpacing:".2em", color:"var(--bleu)"}}>
                  TICKET DE RÉSERVATION / N° {String(Math.floor(Math.random()*9000)+1000)}
                </div>

                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginTop:18}}>
                  <Field label="Date">
                    <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} style={inp}/>
                  </Field>
                  <Field label="Heure">
                    <select value={form.time} onChange={e=>setForm({...form, time:e.target.value})} style={inp}>
                      {times.map(t=><option key={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="Combien vous êtes ?" style={{marginTop:14}}>
                  <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
                    {[1,2,3,4,5,6,7,8].map(n=>(
                      <button key={n} type="button" onClick={()=>setForm({...form, pax:n})} className="disp u" style={{
                        width:42, height:42, border:"2px solid var(--noir)",
                        background: form.pax===n ? "var(--jaune)" : "var(--creme)",
                        cursor:"pointer", fontSize:14,
                        boxShadow: form.pax===n ? "3px 3px 0 var(--noir)" : "none",
                      }}>{n}</button>
                    ))}
                    <button type="button" onClick={()=>setForm({...form, pax:9})} className="mono u" style={{
                      height:42, padding:"0 12px", border:"2px solid var(--noir)",
                      background: form.pax>=9 ? "var(--jaune)" : "var(--creme)",
                      cursor:"pointer", fontSize:11, letterSpacing:".14em"
                    }}>9+</button>
                  </div>
                </Field>

                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginTop:14}}>
                  <Field label="Nom">
                    <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Karim B." style={inp}/>
                  </Field>
                  <Field label="Téléphone">
                    <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="+66…" style={inp}/>
                  </Field>
                </div>

                <Field label="Un truc à savoir ? (allergies, anniv…)" style={{marginTop:14}}>
                  <textarea value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} rows={2} style={{...inp, resize:"vertical"}}/>
                </Field>

                <div style={{marginTop:18, borderTop:"1.5px dashed var(--noir)", paddingTop:14,
                  display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, flexWrap:"wrap"}}>
                  <div className="mono u" style={{fontSize:11, letterSpacing:".16em", opacity:.7}}>
                    ■ CONFIRMATION SOUS 24H
                  </div>
                  <button type="submit" className="disp u" style={{
                    background:"var(--bleu)", color:"var(--creme)", padding:"14px 22px",
                    border:"2px solid var(--noir)", boxShadow:"4px 4px 0 var(--noir)",
                    fontSize:16, cursor:"pointer"
                  }}>Envoyer la demande →</button>
                </div>
              </>
            )}
          </form>

          {/* Info card */}
          <Info/>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          .reserve-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const inp = {
  width:"100%", padding:"10px 12px", border:"1.5px solid var(--noir)",
  background:"var(--creme)", fontFamily:"'Space Grotesk',sans-serif", fontSize:15,
  outline:"none",
};
function Field({ label, children, style }){
  return (
    <label style={{display:"block", ...style}}>
      <div className="mono u" style={{fontSize:10, letterSpacing:".18em", marginBottom:6}}>{label}</div>
      {children}
    </label>
  );
}

function Info(){
  return (
    <div id="find" style={{display:"flex", flexDirection:"column", gap:18}}>
      <div style={{
        background:"var(--bleu)", color:"var(--creme)", padding:22,
        border:"2px solid var(--creme)", position:"relative",
      }}>
        <div className="mono u" style={{fontSize:11, letterSpacing:".18em", opacity:.8}}>OÙ NOUS TROUVER</div>
        <div className="disp u" style={{fontSize:28, lineHeight:1, marginTop:8, letterSpacing:"-.01em"}}>
          CHAWENG BEACH RD<br/>KOH SAMUI, TH
        </div>
        <div className="narrow" style={{marginTop:10, fontSize:15, fontWeight:500, lineHeight:1.4}}>
          200m après le Central Festival, côté plage.<br/>
          Enseigne bleue, tu peux pas rater.
        </div>

        {/* faux map */}
        <div style={{marginTop:16, position:"relative", height:180, border:"1.5px solid var(--creme)", overflow:"hidden"}}>
          <div style={{
            position:"absolute", inset:0,
            backgroundImage:`linear-gradient(rgba(243,237,224,.25) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(243,237,224,.25) 1px, transparent 1px)`,
            backgroundSize:"22px 22px"
          }}/>
          {/* road */}
          <div style={{position:"absolute", left:"8%", right:"8%", top:"52%", height:18, background:"var(--creme)", opacity:.6}}/>
          <div style={{position:"absolute", left:"8%", right:"8%", top:"60%", height:1, borderTop:"2px dashed var(--bleu)"}}/>
          {/* beach */}
          <div style={{position:"absolute", left:0, right:0, bottom:0, height:"18%", background:"var(--jaune)", opacity:.7}}/>
          {/* pin */}
          <div style={{position:"absolute", left:"48%", top:"34%"}}>
            <div style={{
              width:22, height:22, borderRadius:"50%", background:"var(--rouge)",
              border:"3px solid var(--creme)", boxShadow:"0 0 0 4px rgba(200,35,44,.35)"
            }}/>
            <div className="mono u" style={{fontSize:10, letterSpacing:".14em", marginTop:6, whiteSpace:"nowrap", transform:"translateX(-30%)"}}>LE MASSALIA</div>
          </div>
        </div>
      </div>

      <div style={{
        background:"var(--jaune)", color:"var(--noir)", padding:22,
        border:"2px solid var(--creme)",
      }}>
        <div className="mono u" style={{fontSize:11, letterSpacing:".18em"}}>HORAIRES</div>
        <div className="disp u" style={{fontSize:22, marginTop:8, lineHeight:1.05}}>
          Tous les soirs<br/>18:00 — minuit
        </div>
        <div className="narrow" style={{marginTop:8, fontSize:14, fontWeight:600}}>
          Fermé le lundi · Brunch dimanche 11h-15h
        </div>
      </div>

      <div style={{
        padding:18, border:"1.5px solid var(--creme)", display:"flex", justifyContent:"space-between", gap:12, flexWrap:"wrap"
      }}>
        <a href="tel:+6677000000" className="disp u" style={{textDecoration:"none", color:"var(--creme)", fontSize:18}}>☎ +66 77 000 000</a>
        <a href="mailto:bonjour@lemassalia.com" className="mono u" style={{textDecoration:"none", color:"var(--creme)", fontSize:12, letterSpacing:".16em", alignSelf:"center"}}>
          bonjour@lemassalia.com
        </a>
      </div>
    </div>
  );
}

Object.assign(window, { Reserve });
