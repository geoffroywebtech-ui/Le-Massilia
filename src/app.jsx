// App shell — applies tweaks + mounts all sections
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "OM",
  "intensity": "normal",
  "grain": "normal",
  "heroWord": "MASSALIA"
}/*EDITMODE-END*/;

function App(){
  const [state, setState] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(()=>{
    const palettes = {
      OM: { bleu:"#0b3b8f", bleu2:"#0a2a63", ciel:"#6fb7e4", creme:"#f3ede0", "creme-2":"#ece2cc", jaune:"#f7c948", orange:"#ea5a1e", rouge:"#c8232c" },
      Sunset: { bleu:"#2a1248", bleu2:"#1a0830", ciel:"#f09c7a", creme:"#f6e8d8", "creme-2":"#e9d7bf", jaune:"#f4a93a", orange:"#e84a1b", rouge:"#a82149" },
      Night: { bleu:"#0a0a0b", bleu2:"#050506", ciel:"#4a6fb0", creme:"#ede3cf", "creme-2":"#d8cdb5", jaune:"#f0c040", orange:"#d64a20", rouge:"#b81f26" },
      Pastis:{ bleu:"#1a5f4f", bleu2:"#103f33", ciel:"#a8d8a8", creme:"#f4ecd3", "creme-2":"#e5ddbd", jaune:"#edc63a", orange:"#e25a1a", rouge:"#b82630" },
    };
    const p = palettes[state.palette] || palettes.OM;
    const r = document.documentElement;
    Object.entries(p).forEach(([k,v])=> r.style.setProperty(`--${k}`, v));

    const grainMap = { off:0, normal:.25, fort:.5 };
    r.style.setProperty("--grain-opacity", grainMap[state.grain]);
  }, [state.palette, state.grain]);

  const marqSpeed = state.intensity==="explosif" ? 16 : state.intensity==="calme" ? 44 : 28;

  return (
    <>
      <style>{`body::before{ opacity: var(--grain-opacity, .25) !important; }`}</style>
      <Nav/>
      <Hero heroWord={state.heroWord}/>
      <Marquee bg="var(--creme)" fg="var(--bleu)" speed={marqSpeed}>
        {[
          "BIENVENUE À MASSALIA",
          "MARSEILLE → KOH SAMUI",
          "COOK LOUD · EAT LOUD",
          "BOUILLABAISSE · TOM YUM",
          "ROSÉ FRAPPÉ TOUTE L’ANNÉE",
        ]}
      </Marquee>
      <Story/>
      <Menu/>
      <Gallery/>
      <Reserve/>
      <Footer/>
      <Tweaks state={state} setState={setState}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
