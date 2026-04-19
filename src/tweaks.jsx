// Tweaks panel — colors / intensity / copy variant
function Tweaks({ state, setState }){
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  React.useEffect(()=>{
    const onMsg = (e)=>{
      const d = e.data || {};
      if(d.type === "__activate_edit_mode") setActive(true);
      if(d.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({type:"__edit_mode_available"}, "*");
    return ()=> window.removeEventListener("message", onMsg);
  },[]);

  const set = (k,v)=>{
    const next = {...state, [k]:v};
    setState(next);
    window.parent.postMessage({type:"__edit_mode_set_keys", edits:{[k]:v}}, "*");
  };

  if(!active) return null;

  const palettes = {
    OM: { bleu:"#0b3b8f", bleu2:"#0a2a63", ciel:"#6fb7e4", creme:"#f3ede0", jaune:"#f7c948", orange:"#ea5a1e", rouge:"#c8232c" },
    Sunset: { bleu:"#2a1248", bleu2:"#1a0830", ciel:"#f09c7a", creme:"#f6e8d8", jaune:"#f4a93a", orange:"#e84a1b", rouge:"#a82149" },
    Night: { bleu:"#0a0a0b", bleu2:"#050506", ciel:"#4a6fb0", creme:"#ede3cf", jaune:"#f0c040", orange:"#d64a20", rouge:"#b81f26" },
    Pastis:{ bleu:"#1a5f4f", bleu2:"#103f33", ciel:"#a8d8a8", creme:"#f4ecd3", jaune:"#edc63a", orange:"#e25a1a", rouge:"#b82630" },
  };

  return (
    <div style={{
      position:"fixed", right: open? 20 : -280, bottom:20, zIndex:9999,
      width:300, background:"var(--creme)", color:"var(--noir)",
      border:"2px solid var(--noir)", boxShadow:"6px 6px 0 var(--noir)",
      fontFamily:"'Space Grotesk',sans-serif",
      transition:"right .25s ease",
    }}>
      <div onClick={()=>setOpen(!open)} style={{
        background:"var(--noir)", color:"var(--creme)",
        padding:"8px 12px", display:"flex", justifyContent:"space-between", alignItems:"center",
        cursor:"pointer", fontFamily:"'Archivo Black',sans-serif", textTransform:"uppercase",
        letterSpacing:".04em", fontSize:13,
      }}>
        <span>✦ Tweaks</span>
        <span style={{fontSize:10, opacity:.7}}>{open? "–" : "+"}</span>
      </div>

      <div style={{padding:14, display:"flex", flexDirection:"column", gap:14}}>
        <Group label="Palette">
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:6}}>
            {Object.keys(palettes).map(p=>(
              <button key={p} onClick={()=>set("palette", p)} style={{
                padding:"8px", border:"1.5px solid var(--noir)",
                background: state.palette===p ? "var(--jaune)" : "var(--creme)",
                cursor:"pointer", fontFamily:"'Archivo Black',sans-serif",
                textTransform:"uppercase", fontSize:11, letterSpacing:".04em",
              }}>
                <div style={{display:"flex", gap:3, marginBottom:4}}>
                  {[palettes[p].bleu, palettes[p].jaune, palettes[p].orange, palettes[p].rouge].map(c=>(
                    <span key={c} style={{width:16, height:16, background:c, border:"1px solid var(--noir)"}}/>
                  ))}
                </div>
                {p}
              </button>
            ))}
          </div>
        </Group>

        <Group label="Intensité animations">
          <div style={{display:"flex", gap:6}}>
            {["calme","normal","explosif"].map(v=>(
              <button key={v} onClick={()=>set("intensity", v)} style={{
                flex:1, padding:"8px 0", border:"1.5px solid var(--noir)",
                background: state.intensity===v ? "var(--bleu)" : "var(--creme)",
                color: state.intensity===v ? "var(--creme)" : "var(--noir)",
                cursor:"pointer", fontFamily:"'JetBrains Mono',monospace",
                textTransform:"uppercase", fontSize:10, letterSpacing:".14em",
              }}>{v}</button>
            ))}
          </div>
        </Group>

        <Group label="Grain">
          <div style={{display:"flex", gap:6}}>
            {["off","normal","fort"].map(v=>(
              <button key={v} onClick={()=>set("grain", v)} style={{
                flex:1, padding:"8px 0", border:"1.5px solid var(--noir)",
                background: state.grain===v ? "var(--orange)" : "var(--creme)",
                color: state.grain===v ? "var(--creme)" : "var(--noir)",
                cursor:"pointer", fontFamily:"'JetBrains Mono',monospace",
                textTransform:"uppercase", fontSize:10, letterSpacing:".14em",
              }}>{v}</button>
            ))}
          </div>
        </Group>

        <Group label="Hero headline">
          <div style={{display:"flex", flexDirection:"column", gap:6}}>
            {["MASSALIA","MARSEILLE","SAMUI"].map(v=>(
              <button key={v} onClick={()=>set("heroWord", v)} style={{
                padding:"8px", border:"1.5px solid var(--noir)",
                background: state.heroWord===v ? "var(--rouge)" : "var(--creme)",
                color: state.heroWord===v ? "var(--creme)" : "var(--noir)",
                cursor:"pointer", fontFamily:"'Archivo Black',sans-serif",
                textTransform:"uppercase", fontSize:12, letterSpacing:".02em",
              }}>{v}</button>
            ))}
          </div>
        </Group>
      </div>
    </div>
  );
}

function Group({ label, children }){
  return (
    <div>
      <div style={{
        fontFamily:"'JetBrains Mono',monospace", textTransform:"uppercase",
        fontSize:10, letterSpacing:".18em", marginBottom:6, opacity:.8
      }}>{label}</div>
      {children}
    </div>
  );
}

Object.assign(window, { Tweaks });
