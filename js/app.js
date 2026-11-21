/* Navigation, boutons son/musique, démarrage */
function nav(v){view=v;document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));scrollTo(0,0);col();({home,missions,dash,setup,play,report})[v]()}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>nav(b.dataset.v));
$('#sfx').onclick=e=>{sfxOn=!sfxOn;e.target.classList.toggle('on',sfxOn);e.target.setAttribute('aria-pressed',sfxOn);if(sfxOn)sfx('ok')};$('#mus').onclick=e=>{music(!musOn);e.target.classList.toggle('on',musOn);e.target.setAttribute('aria-pressed',musOn)};
nav('home');
