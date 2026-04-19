// Shared primitives: placeholders, stickers, marquees, tape, stamps.
const { useState, useEffect, useRef } = React;

// Striped placeholder with mono caption
function Placeholder({ label, w=800, h=600, tone="bleu", className="", style={}, rotate=0 }){
  const tones = {
    bleu:  { bg:"#0b3b8f", stripe:"#0a2a63", fg:"#f3ede0" },
    creme: { bg:"#ece2cc", stripe:"#dcd0b5", fg:"#0b3b8f" },
    jaune: { bg:"#f7c948", stripe:"#e8b934", fg:"#0a0a0b" },
    orange:{ bg:"#ea5a1e", stripe:"#c8471a", fg:"#f3ede0" },
    noir:  { bg:"#111214", stripe:"#1a1b1e", fg:"#f3ede0" },
    ciel:  { bg:"#6fb7e4", stripe:"#58a4d1", fg:"#0a2a63" },
  };
  const t = tones[tone] || tones.bleu;
  return (
    <div className={className} style={{
      position:"relative", aspectRatio:`${w}/${h}`, width:"100%",
      background:`repeating-linear-gradient(135deg, ${t.bg} 0 14px, ${t.stripe} 14px 28px)`,
      color:t.fg, overflow:"hidden", transform:`rotate(${rotate}deg)`,
      ...style,
    }}>
      <div style={{
        position:"absolute", inset:"10px", border:`1px dashed ${t.fg}`, opacity:.4
      }}/>
      <div className="mono u" style={{
        position:"absolute", left:14, bottom:12, fontSize:11, letterSpacing:".08em", opacity:.9
      }}>
        {label} <span style={{opacity:.55}}>/ {w}×{h}</span>
      </div>
      <div className="mono" style={{
        position:"absolute", right:14, top:12, fontSize:10, letterSpacing:".14em", opacity:.7
      }}>
        ■ IMG
      </div>
    </div>
  );
}

// Sticker: rotated pill/circle with text
function Sticker({ children, bg="var(--jaune)", fg="var(--noir)", rotate=-6, className="", style={}, shape="pill", size=14 }){
  const base = {
    display:"inline-flex", alignItems:"center", justifyContent:"center",
    background:bg, color:fg, padding: shape==="circle" ? "0" : "10px 16px",
    width: shape==="circle" ? 120 : "auto", height: shape==="circle" ? 120 : "auto",
    borderRadius: shape==="pill" ? 999 : shape==="circle" ? "50%" : 6,
    transform:`rotate(${rotate}deg)`,
    fontFamily:"'Archivo Black',sans-serif", textTransform:"uppercase",
    fontSize:size, letterSpacing:".02em", lineHeight: shape==="circle"? 1.02 : 1,
    boxShadow:"2px 3px 0 rgba(0,0,0,.85)",
    textAlign:"center",
    ...style,
  };
  return <span className={className} style={base}>{children}</span>;
}

// Circular text stamp (SVG) — classic "tampon"
function Stamp({ text="LE MASSALIA · KOH SAMUI · ", inner="", color="var(--rouge)", size=140, rotate=-14, style={} }){
  const id = React.useId();
  const r = size/2 - 18;
  // repeat text so it fills
  const repeated = (text+" ").repeat(4);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{transform:`rotate(${rotate}deg)`, ...style}}>
      <defs>
        <path id={id} d={`M ${size/2} ${size/2} m -${r} 0 a ${r} ${r} 0 1 1 ${r*2} 0 a ${r} ${r} 0 1 1 -${r*2} 0`} />
      </defs>
      <circle cx={size/2} cy={size/2} r={size/2-4} fill="none" stroke={color} strokeWidth="2"/>
      <circle cx={size/2} cy={size/2} r={size/2-10} fill="none" stroke={color} strokeWidth="1"/>
      <text fill={color} fontFamily="'Archivo Black',sans-serif" fontSize={size*0.085} letterSpacing="2">
        <textPath href={`#${id}`}>{repeated}</textPath>
      </text>
      {inner && (
        <text x="50%" y="52%" textAnchor="middle" fill={color}
          fontFamily="'Archivo Black',sans-serif" fontSize={size*0.14} letterSpacing="1">
          {inner}
        </text>
      )}
    </svg>
  );
}

// Horizontal marquee
function Marquee({ children, speed=28, bg="var(--bleu)", fg="var(--creme)", pad=14, border=true, reverse=false, style={} }){
  // children is a string or array of strings to repeat
  const items = Array.isArray(children) ? children : [children];
  const row = (
    <div style={{display:"flex", gap:"2.5rem", paddingRight:"2.5rem", whiteSpace:"nowrap"}}>
      {items.map((c,i)=>(
        <span key={i} style={{display:"inline-flex", alignItems:"center", gap:"2.5rem"}}>
          <span>{c}</span>
          <span aria-hidden style={{opacity:.6}}>✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div style={{
      background:bg, color:fg, overflow:"hidden",
      borderTop:border?"2px solid currentColor":"none",
      borderBottom:border?"2px solid currentColor":"none",
      padding:`${pad}px 0`,
      fontFamily:"'Archivo Black',sans-serif", textTransform:"uppercase",
      fontSize:"clamp(20px, 2.4vw, 34px)", letterSpacing:".01em",
      ...style,
    }}>
      <div style={{
        display:"flex", width:"max-content",
        animation:`marq ${speed}s linear infinite`,
        animationDirection: reverse?"reverse":"normal",
      }}>
        {row}{row}{row}{row}
      </div>
      <style>{`@keyframes marq { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

// Tape strip (masking tape)
function Tape({ children="", color="var(--jaune)", rotate=-3, width=180, style={} }){
  return (
    <div style={{
      display:"inline-block", background:color, padding:"6px 14px",
      fontFamily:"'JetBrains Mono',monospace", textTransform:"uppercase",
      fontSize:11, letterSpacing:".14em", color:"var(--noir)",
      transform:`rotate(${rotate}deg)`, width,
      boxShadow:"inset 0 0 0 1px rgba(0,0,0,.08)",
      position:"relative",
      ...style,
    }}>
      {children}
      <span style={{position:"absolute", left:-6, top:0, bottom:0, width:6,
        background:`linear-gradient(90deg, transparent 0 50%, ${color} 50% 100%)`,
        clipPath:"polygon(0 0, 100% 20%, 0 40%, 100% 60%, 0 80%, 100% 100%)"}}/>
      <span style={{position:"absolute", right:-6, top:0, bottom:0, width:6,
        background:`linear-gradient(-90deg, transparent 0 50%, ${color} 50% 100%)`,
        clipPath:"polygon(100% 0, 0 20%, 100% 40%, 0 60%, 100% 80%, 0 100%)"}}/>
    </div>
  );
}

// IntersectionObserver in-view hook
function useInView(opts={ threshold:0.15 }){
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(()=>{
    if(!ref.current) return;
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ setSeen(true); io.disconnect(); } });
    }, opts);
    io.observe(ref.current);
    return ()=>io.disconnect();
  },[]);
  return [ref, seen];
}

// Hand-drawn arrow SVG
function Arrow({ w=120, h=60, color="currentColor", style={} }){
  return (
    <svg viewBox="0 0 120 60" width={w} height={h} style={style} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M4 40 C 30 10, 60 10, 90 30" />
      <path d="M90 30 L 82 22 M90 30 L 80 34" />
    </svg>
  );
}

// Section divider label (ticket-like)
function SectionTag({ num, label, color="var(--noir)" }){
  return (
    <div className="mono u" style={{
      display:"inline-flex", alignItems:"center", gap:10,
      border:`1.5px solid ${color}`, padding:"6px 12px", color, fontSize:11, letterSpacing:".18em",
      background:"transparent"
    }}>
      <span style={{background:color, color:"var(--creme)", padding:"2px 6px"}}>{num}</span>
      <span>{label}</span>
    </div>
  );
}

Object.assign(window, { Placeholder, Sticker, Stamp, Marquee, Tape, Arrow, SectionTag, useInView });
