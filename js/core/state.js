/* État de la session et historique */
let S=null,hist=[],view='home',cur=0;
try{hist=JSON.parse(localStorage.getItem('dw-hist2')||'[]')}catch(e){}
