/* Construction des questions (scénario + question + options mélangées) */
function BM(){const m=(a,b)=>`<div class="m"><small>${a}</small><strong>${b}</strong></div>`;return m('Question',(S.i+1)+' sur '+S.n)+m('Score',S.pts)+m('Série',S.streak)+m('Niveau',LN[S.cfg.diff])}
function SQ(x,sp){if(Array.isArray(x))return{s:x[0],q:x[1]};const k=x.lastIndexOf('. ');if(x.endsWith('?')){if(k<3){const p=SPK[cur][sp];return{s:'Réunion avec '+p[0]+' ('+p[1].toLowerCase()+').',q:x}}return{s:x.slice(0,k+1),q:x.slice(k+2)}}return{s:x,q:'Quelle est la décision la plus appropriée ?'}}
function rounds(f,dg){const B=BANK[f.n];if(!B)return f.r;const sh=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
return B[dg].map((q,j)=>{const g=b=>[0,1,2,3].map(s=>(b+(s==q[1]?1:0)).toString(36)).join('');return{t:'Question '+(j+1)+' sur '+B[dg].length,...SQ(q[2],q[0]),h:HT[q[1]],bk:1,sp:q[0],o:sh([[q[3],q[6],[],g(9)],[q[4],'Acceptable, mais moins pertinent.',[],g(5)],[q[5],'Choix risqué ou inadapté.',[],g(2)]])}})}
// [personnage, compétence (0 analyse, 1 risque, 2 décision, 3 adaptabilité), question, meilleure option, option moyenne, mauvaise option, explication]
