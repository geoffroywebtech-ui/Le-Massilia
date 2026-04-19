// STORY — Marseille → Koh Samui
function Story(){
  const [ref, seen] = useInView();
  const steps = [
    { num:"01", year:"1998", place:"Marseille, 13006", text:"Né entre le Vieux-Port et le stade Vélodrome. Les dimanches ça sent l’ail et le safran depuis la cuisine de la grand-mère.", tone:"bleu"},
    { num:"02", year:"2014", place:"Le Panier", text:"Premier tablier dans un bouchon du Panier. On apprend le trait. On apprend à gueuler en cuisine. On apprend la bouillabaisse.", tone:"creme"},
    { num:"03", year:"2021", place:"Bangkok", text:"Backpack, wok, et une idée fixe : faire rencontrer la Med et l’Asie. Le basilic thai change tout.", tone:"jaune"},
    { num:"04", year:"2024", place:"Koh Samui", text:"Ouverture du Massalia. Boîte noire bleue sur la plage, lumières basses, musique forte. On y est.", tone:"orange"},
  ];

  return (
    <section id="story" ref={ref} style={{
      position:"relative", background:"var(--creme)", color:"var(--encre)",
      padding:"110px 28px 120px", overflow:"hidden"
    }}>
      {/* Big outline word */}
      <div aria-hidden className="disp u" style={{
        position:"absolute", top:30, right:-40, fontSize:"clamp(120px, 22vw, 320px)",
        color:"transparent", WebkitTextStroke:"2px var(--bleu)", opacity:.12, letterSpacing:"-.02em",
        lineHeight:.85, pointerEvents:"none"
      }}>HISTOIRE</div>

      <div style={{maxWidth:1300, margin:"0 auto", position:"relative"}}>
        <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:30}}>
          <SectionTag num="02" label="NOTRE HISTOIRE"/>
          <Tape rotate={-2} color="var(--jaune)">marseille → koh samui</Tape>
        </div>

        <h2 className="disp u" style={{
          margin:"0 0 10px", fontSize:"clamp(48px, 8vw, 120px)", letterSpacing:"-.02em", lineHeight:.9,
          maxWidth:"12ch"
        }}>
          Du Vélodrome<br/>
          <span style={{color:"var(--orange)"}}>à la plage</span>.
        </h2>

        <p style={{maxWidth:640, fontSize:20, lineHeight:1.5, marginTop:22, fontFamily:"'Archivo Narrow',sans-serif", fontWeight:500}}>
          L’histoire d’un gamin de Marseille parti poser son tablier et sa té-mère à 9 000 bornes d’ici. 
          Une cuisine franche, des produits du marché, une équipe qui rigole. Voilà le truc.
        </p>

        {/* Timeline */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:18, marginTop:60,
        }} className="story-grid">
          {steps.map((s,i)=>(
            <div key={s.num} style={{
              position:"relative", border:"1.5px solid var(--noir)", background:"var(--creme)",
              padding:"18px 16px 22px", boxShadow:"5px 5px 0 var(--noir)",
              transform: seen? `translate(0,0) rotate(${[-1.5,1,-.5,1.2][i]}deg)` : "translate(0,30px) rotate(0)",
              opacity: seen? 1 : 0,
              transition:`all .7s cubic-bezier(.2,.8,.2,1) ${i*.12}s`,
            }}>
              <div className="mono u" style={{
                position:"absolute", top:-13, left:12, background:"var(--noir)", color:"var(--creme)",
                padding:"3px 8px", fontSize:11, letterSpacing:".16em"
              }}>ÉTAPE {s.num}</div>
              <Placeholder label={s.place} tone={s.tone} w={500} h={340}/>
              <div className="mono u" style={{marginTop:12, fontSize:11, letterSpacing:".16em", color:"var(--orange)"}}>{s.year} · {s.place}</div>
              <p style={{margin:"8px 0 0", fontSize:15, lineHeight:1.45, fontFamily:"'Archivo Narrow',sans-serif", fontWeight:500}}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div style={{
          display:"grid", gridTemplateColumns:"auto 1fr", gap:24, marginTop:80, alignItems:"center"
        }} className="story-quote">
          <div>
            <Stamp text="CHEF · KARIM · MASSALIA · " inner="K" color="var(--rouge)" size={150} rotate={-8}/>
          </div>
          <blockquote style={{margin:0, padding:0}}>
            <p className="disp u" style={{margin:0, fontSize:"clamp(26px, 3.2vw, 46px)", letterSpacing:"-.01em", lineHeight:1.02}}>
              « On fait pas de la bouffe de<br/>
              carte postale. On fait la cuisine<br/>
              qu’on aime bouffer, nous. »
            </p>
            <footer className="mono u" style={{marginTop:12, fontSize:12, letterSpacing:".18em", opacity:.75}}>
              — Karim, chef & proprio
            </footer>
          </blockquote>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          .story-grid{ grid-template-columns: repeat(2, 1fr) !important; }
          .story-quote{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Story });
