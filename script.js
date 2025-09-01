// ✅ Controllo pagina corrente
const currentPage = window.location.pathname;

// 🌠 ---- Micro-stelline su tutte le pagine ----
function creaStellina() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 4000);
}
setInterval(creaStellina, 1200);

// ✅ CSS per stelline (aggiunto una sola volta)
const styleEl = document.createElement('style');
styleEl.innerHTML = `
.star {
  position: fixed;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: starAnim 4s ease-in-out forwards;
  box-shadow: 0 0 6px rgba(255,255,255,0.7);
  z-index: 0;
}
@keyframes starAnim {
  0% { transform: scale(0); opacity: 0; }
  20% { transform: scale(1); opacity: 1; }
  80% { opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}`;
document.head.appendChild(styleEl);



// 🌌 ---- Effetti SOLO Home ----
if (currentPage.includes("home.html") || currentPage.endsWith("/")) {

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;

    const occhio = document.querySelector('.occhio-hero');
    const stella = document.querySelector('.stella-inline');
    const sole = document.querySelector('.sole-bg');
    const raggi = document.querySelector('.raggi-bg');

    if (occhio) occhio.style.transform = `translate(${x}px, ${y}px)`;
    if (stella) stella.style.transform = `translate(${x / 2}px, ${y / 2}px) scale(1)`;
    if (sole) sole.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
    if (raggi) raggi.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
  });
}
// Premonitori Lab – meter dinamico
(function(){
    const lab = document.querySelector('.lab-premonitori');
    if(!lab) return;
  
    const checks = lab.querySelectorAll('.crit');
    const bar    = lab.querySelector('.lab-bar');
    const label  = lab.querySelector('.lab-label');
  
    function updateScore(){
      let score = 0;
      checks.forEach(c => { if(c.checked) score += Number(c.dataset.weight||0); });
      if(score > 100) score = 100;
  
      // livello & testo
      let livello = 'basso';
      let descr   = 'Coincidenza probabile';
      if(score >= 45 && score < 75){ livello = 'medio'; descr = 'Caso suggestivo'; }
      if(score >= 75){ livello = 'alto'; descr = 'Candidatura forte (serve verifica)'; }
  
      bar.style.width = score + '%';
      lab.setAttribute('data-level', livello);
      label.innerHTML = `Punteggio: ${score}/100 · <b>${descr}</b>`;
    }
  
    checks.forEach(c => c.addEventListener('change', updateScore));
    updateScore();
  })();
<script>
document.addEventListener('DOMContentLoaded', () => {
  // Scala paura
  const fearRange = document.getElementById('fearRange');
  const fearValue = document.getElementById('fearValue');
  if (fearRange && fearValue) {
    const upd = () => fearValue.textContent = fearRange.value;
    fearRange.addEventListener('input', upd);
    upd();
  }

  // Respiro 4-7-8 (1 ciclo guidato)
  const circle = document.getElementById('breathCircle');
  const cue    = document.getElementById('breathCue');
  const start  = document.getElementById('startBreath');
  if (start && circle && cue) {
    let running = false;
    start.addEventListener('click', () => {
      if (running) return;
      running = true;
      const seq = [
        {label:'Inspira (4)',   dur:4000, from:1,   to:1.25},
        {label:'Trattieni (7)', dur:7000, from:1.25,to:1.25},
        {label:'Espira (8)',    dur:8000, from:1.25,to:1}
      ];
      let i = 0;
      const step = () => {
        const s = seq[i % seq.length];
        cue.textContent = s.label;
        circle.animate(
          [{ transform:`scale(${s.from})` }, { transform:`scale(${s.to})` }],
          { duration: s.dur, easing: 'ease-in-out', fill: 'forwards' }
        );
        setTimeout(() => { i++; (i < 3) ? step() : (running = false, cue.textContent = 'Fatto'); }, s.dur);
      };
      step();
    });
  }
  



  
  
  
