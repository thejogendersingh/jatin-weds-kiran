const fs = require('fs');

let code = fs.readFileSync('assets/index-BEMyjfVt.js', 'utf8');

const idxStart = code.indexOf('yS=({title:e,description:t');
const idxEnd = code.indexOf(';var xi={};', idxStart);

if (idxStart === -1 || idxEnd === -1) {
  throw new Error('yS boundaries not found');
}

// Exact original design and layout from cd9b45d, with working gradient and bold text
const originalPerfectYS = `yS=({title:e,description:t,day:n,date:r,time:o,venue:i,dressCode:s,bg:l,tint:a="bg-cream"})=>v.jsx("div",{className:"w-full max-w-5xl mx-auto px-2 sm:px-4 my-6 sm:my-10",children:v.jsxs("article",{className:\`relative w-full min-h-screen rounded-3xl sm:rounded-[2rem] border-0 shadow-2xl overflow-hidden flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20 pb-16 px-4 sm:px-8 select-none isolate \${l?"":a}\`,children:[` +
`l&&v.jsxs(v.Fragment,{children:[` +
`v.jsx("img",{src:l,alt:e,loading:"lazy",className:"absolute inset-0 w-full h-full object-cover object-center",width:1920,height:1080}),` +
`v.jsx("div",{style:{position:"absolute",left:0,right:0,top:0,height:"72%",background:"linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.52) 55%, transparent 100%)",pointerEvents:"none"},"aria-hidden":!0})` +
`]}),` +
`v.jsxs("div",{className:"relative z-10 w-full max-w-[95%] sm:max-w-xl mx-auto text-center text-white px-2 overflow-visible",children:[` +
`v.jsx("h3",{className:"font-script text-4xl sm:text-6xl md:text-7xl text-white [text-shadow:_0_3px_12px_rgba(0,0,0,0.95),_0_1px_4px_rgba(0,0,0,0.9)] leading-normal pt-2 sm:pt-4 pb-1 whitespace-nowrap max-w-full overflow-visible",children:e}),` +
`v.jsx("p",{className:"mt-1 italic text-xs sm:text-base md:text-xl text-amber-100 font-serif-display whitespace-nowrap max-w-full overflow-visible [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]",children:t}),` +
`v.jsxs("div",{className:"my-4 flex items-center justify-center gap-3",children:[` +
`v.jsx("span",{className:"h-px w-10 bg-amber-200/80 shadow-md"}),` +
`v.jsx("span",{className:"text-amber-300 text-lg [text-shadow:_0_2px_6px_rgba(0,0,0,0.95)]",children:"❀"}),` +
`v.jsx("span",{className:"h-px w-10 bg-amber-200/80 shadow-md"})` +
`]}),` +
`v.jsxs("div",{className:"space-y-4 w-full",children:[` +
`v.jsxs("div",{className:"flex items-center justify-center gap-3 sm:gap-6 text-center",children:[` +
`v.jsxs("div",{className:"flex-1 min-w-0",children:[` +
`v.jsx("div",{className:"font-cinzel text-xs sm:text-sm text-amber-300 font-bold tracking-widest [text-shadow:_0_2px_6px_rgba(0,0,0,0.95)]",children:"DATE"}),` +
`v.jsxs("div",{className:"font-serif-display text-sm sm:text-base md:text-lg font-semibold mt-0.5 text-white leading-snug [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]",children:[` +
`v.jsx("span",{className:"text-amber-200/90 font-medium block text-xs sm:text-sm",children:n}),` +
`v.jsx("span",{className:"block text-sm sm:text-base md:text-lg text-white font-bold",children:r})` +
`]})` +
`]}),` +
`v.jsx("div",{className:"h-10 w-px bg-amber-200/50 shadow-md shrink-0 self-center","aria-hidden":!0}),` +
`v.jsxs("div",{className:"flex-1 min-w-0",children:[` +
`v.jsx("div",{className:"font-cinzel text-xs sm:text-sm text-amber-300 font-bold tracking-widest [text-shadow:_0_2px_6px_rgba(0,0,0,0.95)]",children:"TIME"}),` +
`v.jsx("div",{className:"font-serif-display text-sm sm:text-base md:text-lg font-bold mt-0.5 text-white leading-snug [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]",children:o})` +
`]})` +
`]}),` +
`v.jsxs("div",{children:[` +
`v.jsx("div",{className:"font-cinzel text-xs sm:text-sm text-amber-300 font-bold tracking-widest [text-shadow:_0_2px_6px_rgba(0,0,0,0.95)]",children:"VENUE"}),` +
`v.jsx("div",{className:"font-serif-display text-base sm:text-xl font-bold mt-0.5 text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]",children:i})` +
`]}),` +
`(s?v.jsxs("div",{className:"mt-4 pt-3 border-t border-white/30 max-w-sm mx-auto",children:[` +
`v.jsxs("span",{className:"font-cinzel text-xs sm:text-sm text-amber-300 font-bold tracking-widest [text-shadow:_0_2px_6px_rgba(0,0,0,0.95)]",children:["DRESS CODE:"," "]}),` +
`v.jsx("span",{className:"font-serif-display italic text-sm sm:text-base text-amber-100 font-semibold [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]",children:s})` +
`]}):null)` +
`]}` +
`)]}` +
`)]}` +
`)}`;

code = code.substring(0, idxStart) + originalPerfectYS + code.substring(idxEnd);
fs.writeFileSync('assets/index-BEMyjfVt.js', code, 'utf8');
console.log('Restored original design with working gradient and bold text!');
